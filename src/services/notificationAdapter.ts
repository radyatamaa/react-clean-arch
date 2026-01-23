import type { NotificationService } from "../application/ports";

export function useNotifier() : NotificationService {
    return {
        notify(message) {
            window.alert(message)
        },
    }
}