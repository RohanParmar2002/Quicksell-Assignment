import { ReactComponent as ToDo } from '../Assets/icons_FEtask/To-do.svg'; // PascalCase
import { ReactComponent as Backlog } from '../Assets/icons_FEtask/Backlog.svg'; // PascalCase
import { ReactComponent as ThreeDotMenu } from '../Assets/icons_FEtask/3 dot menu.svg'; // PascalCase
import { ReactComponent as InProg } from '../Assets/icons_FEtask/in-progress.svg'; // PascalCase
import { ReactComponent as Done } from '../Assets/icons_FEtask/Done.svg'; // PascalCase
import { ReactComponent as Cancelled } from '../Assets/icons_FEtask/Cancelled.svg'; // PascalCase
import { ReactComponent as UrgentPriority } from '../Assets/icons_FEtask/SVG - Urgent Priority.svg'; // PascalCase
import { ReactComponent as LowPriority } from '../Assets/icons_FEtask/Img - Low Priority.svg'; // PascalCase
import { ReactComponent as MediumPriority } from '../Assets/icons_FEtask/Img - Medium Priority.svg'; // PascalCase
import { ReactComponent as HighPriority } from '../Assets/icons_FEtask/Img - High Priority.svg'; // PascalCase

export const getPriorityIcon = (priority: string) => {
    switch (priority) {
        case "No priority": return <ThreeDotMenu />; // Updated name
        case "Low": return <LowPriority />; // Updated name
        case "Medium": return <MediumPriority />; // Updated name
        case "High": return <HighPriority />; // Updated name
        case "Urgent": return <UrgentPriority />; // Updated name
        default: return <UrgentPriority />; // Updated name
    }
}

export const getStatusIcon = (status: string) => {
    switch (status) {
        case "Backlog": return <Backlog />; // Updated name
        case "Todo": return <ToDo />; // Updated name
        case "In progress": return <InProg />; // Updated name
        case "Done": return <Done />; // Updated name
        case "Canceled": return <Cancelled />; // Updated name
        default: return <Cancelled />; // Updated name
    }
}
