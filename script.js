{
    mode: "transaction",
    startedAt: 1720000000,
    endedAt: 1720000012,
    duration: 12,
    events: [
        {
            event: "storage:saved",
            data: ...,
            timestamp: 1720000003
        },
        {
            event: "dashboard:updated",
            data: ...,
            timestamp: 1720000006
        }
    ]
}timestampconsole.clear();
console.table(...);addEvent(...)emitEvent(EVENTS.DEVTOOLS_UPDATED);renderTable();
renderTimelineChart();
renderPanels();let cycleId = 0;

export function startCycle(mode) {
    currentCycle = {
        id: ++cycleId,
        mode,
        startedAt: performance.now(),
        events: []
    };

    timeline.push(currentCycle);
}startedAt: performance.now(){
    startedAt: performance.now(),
    startedTime: Date.now()
}Transaction Refresh

Storage       ███ 2 ms
Dashboard     █████ 5 ms
Charts        ██ 1 ms
Theme         █ 0.5 ms
UI            ████ 4 msFeature
    │
    ▼
Core State
    │
    ▼
Refresh Pipeline
    │
    ▼
Refresh Cycle
    │
    ├── storage:saved
    ├── dashboard:updated
    ├── charts:rendered
    ├── theme:changed
    └── ui:rendered
    │
    ▼
Timeline Store
    │
    ▼
Statistics
    │
    ▼
Charts • Panels • Table
