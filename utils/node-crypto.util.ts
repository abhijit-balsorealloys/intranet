import { encryptionKey } from 'app-config';
import crypto from 'crypto'

export const encrypt = async (text: string) => {
    /* const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 15, 25, 35, 45, 55, 65, 75];
    let iv = new Int8Array(16);
    for (let i = 0; i < iv.length; i++) iv[i] = arr[i]; */
    let iv = Buffer.alloc(16);
    try {
        text = JSON.stringify(text);
    } catch (error) { }
    const cipher = crypto.createCipheriv("aes-256-ctr" as string, encryptionKey, iv);
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
    return encrypted.toString("hex");
};

export const decrypt = async (hash: string) => {
    /* const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 15, 25, 35, 45, 55, 65, 75];
    let iv = new Int8Array(16);
    for (let i = 0; i < iv.length; i++) iv[i] = arr[i]; */
    let iv = Buffer.alloc(16);
    const decipher = crypto.createDecipheriv("aes-256-ctr", encryptionKey, Buffer.from(iv.toString("hex"), "hex"));
    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash, "hex")), decipher.final()]);
    let result = decrpyted.toString();
    try {
        result = JSON.parse(result);
    } catch (error) { }
    return result;
};