import {
    LayoutDashboard,
    Users,
    CheckSquare,
    Bookmark,
    FileText,
    BarChart3,
    Settings,
    Bell,
    HelpCircle,
    Lock,
    Folder,
    LogOut
} from "lucide-react";

import Icons from '@/components/shared/Icons';

const icons = [
    LayoutDashboard,
    Users,
    CheckSquare,
    Bookmark,
    FileText,
    BarChart3,
    Settings,
    Bell,
    HelpCircle,
    Lock,
    Folder,
    LogOut
];

export default function LeftNavigation() {
    return (
        <div className='inline-flex flex-col gap-1 '>
            {icons.map((Icon, index) => (
                <Icons key={index} Icon={Icon} size={14} />
            ))}
        </div>
    );
}

;
