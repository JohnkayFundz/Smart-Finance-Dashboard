<div class="progress">
    <div class="progress-fill ${status}"
         style="width:${percentage}%">
    </div>
</div>let status = "good";

if (percentage >= 100) {
    status = "danger";
} else if (percentage >= 80) {
    status = "warning";
}
