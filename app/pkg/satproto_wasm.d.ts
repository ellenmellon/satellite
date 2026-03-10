/* tslint:disable */
/* eslint-disable */

/**
 * Bootstrap a new Satellite site. Generates content key and pushes initial files.
 */
export function bootstrap(domain: string): Promise<void>;

/**
 * Create a new post. Returns the new post as JSON.
 */
export function create_post(author_domain: string, text: string, reply_to?: string | null, reply_to_author?: string | null, repost_of?: string | null, repost_of_author?: string | null): Promise<any>;

/**
 * Follow a user. Encrypts our content key for them and updates follows list.
 */
export function follow_user(my_domain: string, target_domain: string): Promise<void>;

/**
 * Get follows list for display. Returns JSON array of domain strings.
 */
export function get_follows(my_domain: string): Promise<any>;

/**
 * Get our public key from localStorage.
 */
export function get_public_key(): string;

/**
 * Initialize the client. Call once on page load.
 */
export function init(): Promise<void>;

/**
 * Load the aggregated feed for a user. Returns JSON array of posts.
 */
export function load_feed(my_domain: string): Promise<any>;

/**
 * Load replies to a specific post. Returns JSON array of posts.
 */
export function load_replies(my_domain: string, post_id: string, post_author: string): Promise<any>;

/**
 * Unfollow a user. Generates new content key, re-encrypts all posts,
 * re-creates key envelopes for remaining followers only.
 */
export function unfollow_user(my_domain: string, target_domain: string): Promise<void>;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly bootstrap: (a: number, b: number) => any;
    readonly create_post: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number) => any;
    readonly follow_user: (a: number, b: number, c: number, d: number) => any;
    readonly get_follows: (a: number, b: number) => any;
    readonly get_public_key: () => [number, number, number, number];
    readonly init: () => any;
    readonly load_feed: (a: number, b: number) => any;
    readonly load_replies: (a: number, b: number, c: number, d: number, e: number, f: number) => any;
    readonly unfollow_user: (a: number, b: number, c: number, d: number) => any;
    readonly wasm_bindgen__closure__destroy__h4fbb9ff7f0d78d7e: (a: number, b: number) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h8912b03767920e75: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen__convert__closures_____invoke__h821004dab3cc0bb6: (a: number, b: number, c: any, d: any) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
