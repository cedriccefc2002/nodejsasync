import { access, constants, promises } from "fs";

// use https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_fs_promises_api

export async function accessAsync(path: string, mode = constants.F_OK): Promise<[boolean, NodeJS.ErrnoException | null]> {
    return new Promise<[boolean, NodeJS.ErrnoException | null]>((resolve) => {
        access(path, mode, (err) => {
            resolve([err ? true : false, err]);
        });
    });
}

// export async function appendFileAsync(file: string | number | Buffer | URL, data: any, options?: WriteFileOptions) {
//     return new Promise<void>((resolve, reject) => {
//         const finalfn = (err: NodeJS.ErrnoException | null) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve();
//             }
//         };
//         if (options) {
//             appendFile(file, data, options, finalfn);
//         } else {
//             appendFile(file, data, finalfn);
//         }
//     });
// }

// export async function chmodAsync(path: PathLike, mode: string | number) {
//     return new Promise<void>((resolve, reject) => {
//         const finalfn = (err: NodeJS.ErrnoException | null) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve();
//             }
//         };
//         chmod(path, mode, finalfn);
//     });
// }

// export async function chownAsync(path: PathLike, uid: number, gid: number) {
//     return new Promise<void>((resolve, reject) => {
//         const finalfn = (err: NodeJS.ErrnoException | null) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve();
//             }
//         };
//         chown(path, uid, gid, finalfn);
//     });
// }

// export async function closeAsync(fd: number) {
//     return new Promise<void>((resolve, reject) => {
//         const finalfn = (err: NodeJS.ErrnoException | null) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve();
//             }
//         };
//         close(fd, finalfn);
//     });
// }

// export async function copyFileAsync(src: PathLike, dest: PathLike) {
//     return new Promise<void>((resolve, reject) => {
//         const finalfn = (err: NodeJS.ErrnoException | null) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve();
//             }
//         };
//         copyFile(src, dest, finalfn);
//     });
// }

// export async function fchmodAsync(fd: number, mode: string | number) {
//     return new Promise<void>((resolve, reject) => {
//         const finalfn = (err: NodeJS.ErrnoException | null) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve();
//             }
//         };
//         fchmod(fd, mode, finalfn);
//     });
// }

// export async function fchownAsync(fd: number, uid: number, gid: number) {
//     return new Promise<void>((resolve, reject) => {
//         const finalfn = (err: NodeJS.ErrnoException | null) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve();
//             }
//         };
//         fchown(fd, uid, gid, finalfn);
//     });
// }

// export async function fdatasyncAsync(fd: number) {
//     return new Promise<void>((resolve, reject) => {
//         const finalfn = (err: NodeJS.ErrnoException | null) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve();
//             }
//         };
//         fdatasync(fd, finalfn);
//     });
// }