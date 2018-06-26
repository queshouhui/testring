import { IBrowserProxyController } from '@testring/types';
import { Transport } from '@testring/transport';
import { WebManagerMessageType } from './structs';

export class WebApplicationController {

    constructor(
        private browserProxy: IBrowserProxyController,
        private transport: Transport
    ) {
        this.transport.on(WebManagerMessageType.execute, async (message) => {
            try {
                const response = await this.browserProxy.execute(message.command);

                this.transport.send(message.uid, WebManagerMessageType.response, {
                    uid: message.uid,
                    response: response
                });
            } catch (error) {
                this.transport.send(message.uid, WebManagerMessageType.response, {
                    uid: message.uid,
                    error: error
                });
            }
        });
    }
}
