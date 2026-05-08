// MCP Actions 客户端兼容层
// 在静态导出模式下，提供空实现以避免 Server Actions 错误

import {
  McpClientData,
  McpConfigData,
  McpRequestMessage,
  ServerStatusResponse,
} from "./types";

// 检查是否为静态导出模式
const isStaticExport =
  typeof window !== "undefined" || process.env.BUILD_MODE === "export";

// 动态导入 actions 的辅助函数 - 使用绝对路径绕过 webpack 检查
async function importActions() {
  try {
    // 在构建时直接返回 null，避免 webpack 尝试解析
    if (process.env.BUILD_MODE === "export") {
      return null;
    }
    return await import("./actions");
  } catch (e) {
    // actions 文件不存在或无法加载
    return null;
  }
}

export async function getClientsStatus(): Promise<
  Record<string, ServerStatusResponse>
> {
  if (isStaticExport) return {};
  const actions = await importActions();
  if (actions) {
    return actions.getClientsStatus();
  }
  return {};
}

export async function getClientTools(clientId: string) {
  if (isStaticExport) return null;
  const actions = await importActions();
  if (actions) {
    return actions.getClientTools(clientId);
  }
  return null;
}

export async function getAvailableClientsCount() {
  if (isStaticExport) return 0;
  const actions = await importActions();
  if (actions) {
    return actions.getAvailableClientsCount();
  }
  return 0;
}

export async function getAllTools() {
  if (isStaticExport) return [];
  const actions = await importActions();
  if (actions) {
    return actions.getAllTools();
  }
  return [];
}

export async function initializeMcpSystem(): Promise<
  McpConfigData | undefined
> {
  if (isStaticExport) return undefined;
  const actions = await importActions();
  if (actions) {
    const result = await actions.initializeMcpSystem();
    return result || undefined;
  }
  return undefined;
}

export async function addMcpServer(clientId: string, config: any) {
  if (isStaticExport) throw new Error("MCP not available in static export");
  const actions = await importActions();
  if (actions) {
    return actions.addMcpServer(clientId, config);
  }
  throw new Error("MCP not available");
}

export async function pauseMcpServer(clientId: string) {
  if (isStaticExport) throw new Error("MCP not available in static export");
  const actions = await importActions();
  if (actions) {
    return actions.pauseMcpServer(clientId);
  }
  throw new Error("MCP not available");
}

export async function resumeMcpServer(clientId: string) {
  if (isStaticExport) throw new Error("MCP not available in static export");
  const actions = await importActions();
  if (actions) {
    return actions.resumeMcpServer(clientId);
  }
  throw new Error("MCP not available");
}

export async function removeMcpServer(clientId: string) {
  if (isStaticExport) throw new Error("MCP not available in static export");
  const actions = await importActions();
  if (actions) {
    return actions.removeMcpServer(clientId);
  }
  throw new Error("MCP not available");
}

export async function restartAllClients(): Promise<McpConfigData | undefined> {
  if (isStaticExport) return undefined;
  const actions = await importActions();
  if (actions) {
    const result = await actions.restartAllClients();
    return result || undefined;
  }
  return undefined;
}

export async function executeMcpAction(
  clientId: string,
  request: McpRequestMessage,
) {
  if (isStaticExport) throw new Error("MCP not available in static export");
  const actions = await importActions();
  if (actions) {
    return actions.executeMcpAction(clientId, request);
  }
  throw new Error("MCP not available");
}

export async function isMcpEnabled() {
  if (isStaticExport) return false;
  const actions = await importActions();
  if (actions) {
    return actions.isMcpEnabled();
  }
  return false;
}

export async function getMcpConfigFromFile(): Promise<McpConfigData> {
  if (isStaticExport) {
    return { mcpServers: {} };
  }
  const actions = await importActions();
  if (actions) {
    return actions.getMcpConfigFromFile();
  }
  return { mcpServers: {} };
}
