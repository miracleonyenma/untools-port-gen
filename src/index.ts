export function generatePortFromName(
  name: string,
  minPort = 3000,
  maxPort = 9999,
): number {
  if (!name || typeof name !== "string") {
    throw new Error("Project name must be a non-empty string.");
  }
  if (minPort < 1024 || maxPort > 65535 || minPort >= maxPort) {
    throw new Error("Invalid port range. Must be between 1024 and 65535.");
  }

  function fnv1aHash(str: string): number {
    let hash = 0x811c9dc5;
    for (let i = 0; i < str.length; i++) {
      hash ^= str.charCodeAt(i);
      hash *= 0x01000193;
    }
    return hash >>> 0;
  }

  const hash = fnv1aHash(name);
  return minPort + (hash % (maxPort - minPort + 1));
}
