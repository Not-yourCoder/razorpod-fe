import { Select, SelectContent, SelectItem, SelectTrigger } from "../Ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "../Ui/avatar"
import { accountMenuItems } from "@/constants/Constants"

const AccountSelect = () => {
    return (
        <Select>
            <SelectTrigger className="w-fit border-none bg-transparent px-0 focus:ring-0 focus:ring-offset-0">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </SelectTrigger>

            <SelectContent className="w-48">
                {accountMenuItems.map(({ label, value, icon: Icon, className }) => (
                    <SelectItem
                        key={value}
                        value={value}
                        className={`flex gap-2 items-center ${className || ""}`}
                    >
                        <Icon size={14} /> {label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

export default AccountSelect
