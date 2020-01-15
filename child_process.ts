import { exec, execFile, ExecException, ExecOptions } from "child_process";

export async function execFileAsync(file: string, options?: ExecOptions | ({ encoding: BufferEncoding } & ExecOptions)): Promise<[string, string]> {
    return new Promise<[string, string]>((resolve, reject) => {
        const finalfn = (error: ExecException | null, stdout: string, stderr: string) => {
            if (error) {
                reject(error);
            } else {
                resolve([stdout, stderr]);
            }
        };
        if (options) {
            execFile(file, options, finalfn);
        } else {
            execFile(file, finalfn);
        }
    });
}

export async function execAsync(command: string, options?: ExecOptions | ({ encoding: BufferEncoding } & ExecOptions)): Promise<[string, string]> {
    return new Promise<[string, string]>((resolve, reject) => {
        const finalfn = (error: ExecException | null, stdout: string, stderr: string) => {
            if (error) {
                reject(error);
            } else {
                resolve([stdout, stderr]);
            }
        };
        if (options) {
            exec(command, options, finalfn);
        } else {
            exec(command, finalfn);
        }
    });
}

export async function execBufferAsync(command: string, options: { encoding: "buffer" | null } & ExecOptions): Promise<[Buffer, Buffer]> {
    return new Promise<[Buffer, Buffer]>((resolve, reject) => {
        const finalfn = (error: ExecException | null, stdout: Buffer, stderr: Buffer) => {
            if (error) {
                reject(error);
            } else {
                resolve([stdout, stderr]);
            }
        };
        exec(command, options, finalfn);
    });
}
