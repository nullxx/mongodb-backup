import { Stream } from 'stream';

interface BackupOptions {
    uri: string;
    root: string;
    stream: Stream;
    parser?: string | Function;
    collections?: string[];
    tar?: string;
    query?: Record<string, unknown>;
    numCursors?: number;
    logger?: string;
    metadata: boolean;
    options: Record<string, unknown>;
    callback?: (err: Error | null) => void;
}

export default function backup(options: BackupOptions): void;