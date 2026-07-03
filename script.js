export function emit(event, payload) {
    const handlers = [...(listeners.get(event) ?? [])];

    for (const handler of handlers) {
        try {
            handler(payload);
        } catch (error) {
            console.error(`Error handling "${event}"`, error);
        }
    }

    const wildcardHandlers = [...(listeners.get("*") ?? [])];

    for (const handler of wildcardHandlers) {
        try {
            handler(payload, event);
        } catch (error) {
            console.error(`Error handling "*"`, error);
        }
    }
}
