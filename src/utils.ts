import {  keccak256 } from 'ethers';
export function hashMessage(message: string): string {
    const buffer = Buffer.from(message, 'utf8');
    return keccak256(buffer);
}