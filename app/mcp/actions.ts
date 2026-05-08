// Empty stub for static export - MCP Server Actions not supported in static export
// This file is replaced during build to avoid "Server Actions not supported" error

import type {
  ListToolsResponse,
  McpClientData,
  McpConfigData,
  McpRequestMessage,
  ServerConfig,
  ServerStatusResponse,
} from "./types";

export async function getClientsStatus(): Promise<
  Record<string, ServerStatusResponse>
> {
  return {};
}

export async function getClientTools(
  _clientId: string,
): Promise<ListToolsResponse | null> {
  return null;
}

export async function getAvailableClientsCount(): Promise<number> {
  return 0;
}

export async function getAllTools(): Promise<
  Array<{ clientId: string; tools: ListToolsResponse | null }>
> {
  return [];
}

export async function initializeMcpSystem(): Promise<
  McpConfigData | undefined
> {
  return undefined;
}

export async function addMcpServer(
  _clientId: string,
  _config: ServerConfig,
): Promise<McpConfigData> {
  throw new Error("MCP not available in static export");
}

export async function pauseMcpServer(
  _clientId: string,
): Promise<McpConfigData> {
  throw new Error("MCP not available in static export");
}

export async function resumeMcpServer(_clientId: string): Promise<void> {
  throw new Error("MCP not available in static export");
}

export async function removeMcpServer(
  _clientId: string,
): Promise<McpConfigData> {
  throw new Error("MCP not available in static export");
}

export async function restartAllClients(): Promise<McpConfigData | undefined> {
  return undefined;
}

export async function executeMcpAction(
  _clientId: string,
  _request: McpRequestMessage,
) {
  throw new Error("MCP not available in static export");
}

export async function isMcpEnabled() {
  return false;
}

export async function getMcpConfigFromFile(): Promise<McpConfigData> {
  return { mcpServers: {} };
}
