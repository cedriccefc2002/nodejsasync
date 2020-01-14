export async function queueMicrotaskAsync(callback: () => Promise<void>) {
    return new Promise<void>((resolve) => {
        queueMicrotask(async () => {
            await callback();
            resolve();
        });
    });
}

export async function setImmediateAsync() {
    return new Promise<void>((resolve) => {
        setImmediate(resolve);
    });
}

// setIntervalAsync: do`t use setInterval

export async function setTimeoutAsync(delay: number) {
    return new Promise<void>((resolve) => {
        setTimeout(resolve, delay);
    });
}
