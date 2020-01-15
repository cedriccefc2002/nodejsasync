import { disconnect, Worker } from "cluster";

class WorkerAsync extends Worker {
    public async sendAsync(message: any, sendHandle?: any): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            const status = this.send(message, sendHandle, (error) => {
                if (error) {
                    reject(error);
                    this.disconnect()
                } else {
                    resolve(status);
                }
            })
        });
    }
}

export function disconnectAsync() {
    return new Promise<void>((resolve, reject) => {
        disconnect(resolve);
    });
}