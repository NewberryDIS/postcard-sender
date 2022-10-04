
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into public-facing code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const npm_command: string;
	export const npm_config_userconfig: string;
	export const COLORTERM: string;
	export const npm_config_cache: string;
	export const npm_package_dev_optional: string;
	export const XDG_SESSION_PATH: string;
	export const TERM_PROGRAM_VERSION: string;
	export const APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL: string;
	export const npm_package_integrity: string;
	export const I3SOCK: string;
	export const NODE: string;
	export const LC_ADDRESS: string;
	export const DOTNET_ROOT: string;
	export const LC_NAME: string;
	export const GRADLE_HOME: string;
	export const COLOR: string;
	export const npm_config_local_prefix: string;
	export const DESKTOP_SESSION: string;
	export const LC_MONETARY: string;
	export const NO_AT_BRIDGE: string;
	export const npm_config_globalconfig: string;
	export const EDITOR: string;
	export const GTK_MODULES: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const LOGNAME: string;
	export const XDG_SESSION_DESKTOP: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const XDG_SESSION_TYPE: string;
	export const npm_package_dev: string;
	export const npm_config_init_module: string;
	export const _: string;
	export const XAUTHORITY: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const XDG_GREETER_DATA_DIR: string;
	export const MOTD_SHOWN: string;
	export const GDM_LANG: string;
	export const HOME: string;
	export const npm_package_peer: string;
	export const LC_PAPER: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const npm_package_version: string;
	export const npm_package_resolved: string;
	export const GIT_ASKPASS: string;
	export const XDG_SEAT_PATH: string;
	export const INIT_CWD: string;
	export const DOTNET_BUNDLE_EXTRACT_BASE_DIR: string;
	export const CHROME_DESKTOP: string;
	export const npm_lifecycle_script: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const CSRVR: string;
	export const npm_package_optional: string;
	export const XDG_SESSION_CLASS: string;
	export const LC_IDENTIFICATION: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const npm_config_prefix: string;
	export const USER: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const DISPLAY: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const LC_TELEPHONE: string;
	export const LC_MEASUREMENT: string;
	export const XDG_VTNR: string;
	export const XDG_SESSION_ID: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const MOZ_PLUGIN_PATH: string;
	export const XDG_RUNTIME_DIR: string;
	export const npm_package_json: string;
	export const LC_TIME: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const XDG_DATA_DIRS: string;
	export const GDK_BACKEND: string;
	export const npm_config_noproxy: string;
	export const BROWSER: string;
	export const PATH: string;
	export const npm_config_metrics_registry: string;
	export const npm_config_node_gyp: string;
	export const GDMSESSION: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_config_global_prefix: string;
	export const MAIL: string;
	export const npm_node_execpath: string;
	export const LC_NUMERIC: string;
	export const OLDPWD: string;
	export const npm_package_engines_node: string;
	export const TERM_PROGRAM: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {

}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into public-facing code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		npm_command: string;
		npm_config_userconfig: string;
		COLORTERM: string;
		npm_config_cache: string;
		npm_package_dev_optional: string;
		XDG_SESSION_PATH: string;
		TERM_PROGRAM_VERSION: string;
		APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL: string;
		npm_package_integrity: string;
		I3SOCK: string;
		NODE: string;
		LC_ADDRESS: string;
		DOTNET_ROOT: string;
		LC_NAME: string;
		GRADLE_HOME: string;
		COLOR: string;
		npm_config_local_prefix: string;
		DESKTOP_SESSION: string;
		LC_MONETARY: string;
		NO_AT_BRIDGE: string;
		npm_config_globalconfig: string;
		EDITOR: string;
		GTK_MODULES: string;
		XDG_SEAT: string;
		PWD: string;
		LOGNAME: string;
		XDG_SESSION_DESKTOP: string;
		QT_QPA_PLATFORMTHEME: string;
		XDG_SESSION_TYPE: string;
		npm_package_dev: string;
		npm_config_init_module: string;
		_: string;
		XAUTHORITY: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		XDG_GREETER_DATA_DIR: string;
		MOTD_SHOWN: string;
		GDM_LANG: string;
		HOME: string;
		npm_package_peer: string;
		LC_PAPER: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		npm_package_version: string;
		npm_package_resolved: string;
		GIT_ASKPASS: string;
		XDG_SEAT_PATH: string;
		INIT_CWD: string;
		DOTNET_BUNDLE_EXTRACT_BASE_DIR: string;
		CHROME_DESKTOP: string;
		npm_lifecycle_script: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		CSRVR: string;
		npm_package_optional: string;
		XDG_SESSION_CLASS: string;
		LC_IDENTIFICATION: string;
		TERM: string;
		npm_package_name: string;
		npm_config_prefix: string;
		USER: string;
		VSCODE_GIT_IPC_HANDLE: string;
		DISPLAY: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		LC_TELEPHONE: string;
		LC_MEASUREMENT: string;
		XDG_VTNR: string;
		XDG_SESSION_ID: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		MOZ_PLUGIN_PATH: string;
		XDG_RUNTIME_DIR: string;
		npm_package_json: string;
		LC_TIME: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		XDG_DATA_DIRS: string;
		GDK_BACKEND: string;
		npm_config_noproxy: string;
		BROWSER: string;
		PATH: string;
		npm_config_metrics_registry: string;
		npm_config_node_gyp: string;
		GDMSESSION: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_config_global_prefix: string;
		MAIL: string;
		npm_node_execpath: string;
		LC_NUMERIC: string;
		OLDPWD: string;
		npm_package_engines_node: string;
		TERM_PROGRAM: string;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: string]: string | undefined;
	}
}
