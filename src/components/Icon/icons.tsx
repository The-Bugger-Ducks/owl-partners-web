import {ReactComponent as CheckIcon} from "../../assets/icons/check.svg";
import {ReactComponent as CheckboxOffIcon} from "../../assets/icons/checkbox-off.svg";
import {ReactComponent as CheckboxOnIcon} from "../../assets/icons/checkbox-on.svg";
import {ReactComponent as CloseIcon} from "../../assets/icons/close.svg";
import {ReactComponent as EditIcon} from "../../assets/icons/edit.svg";
import {ReactComponent as EyeHiddenIcon} from "../../assets/icons/eye-hidden.svg";
import {ReactComponent as EyeIcon} from "../../assets/icons/eye.svg";
import {ReactComponent as HomeIcon} from "../../assets/icons/home.svg";
import {ReactComponent as ImageIcon} from "../../assets/icons/image.svg";
import {ReactComponent as InfoIcon} from "../../assets/icons/info.svg";
import {ReactComponent as LoadingIcon} from "../../assets/icons/loading.svg";
import {ReactComponent as LogOffIcon} from "../../assets/icons/log-off.svg";
import {ReactComponent as MenuIcon} from "../../assets/icons/menu.svg";
import {ReactComponent as MinusIcon} from "../../assets/icons/minus.svg";
import {ReactComponent as OrderIcon} from "../../assets/icons/order.svg";
import {ReactComponent as PlusIcon} from "../../assets/icons/plus.svg";
import {ReactComponent as ProfileIcon} from "../../assets/icons/profile.svg";
import {ReactComponent as QuestionIcon} from "../../assets/icons/question.svg";
import {ReactComponent as Radio1Icon} from "../../assets/icons/radio-1.svg";
import {ReactComponent as RadioIcon} from "../../assets/icons/radio.svg";
import {ReactComponent as RefreshIcon} from "../../assets/icons/refresh.svg";
import {ReactComponent as SearchIcon} from "../../assets/icons/search.svg";
import {ReactComponent as TrashIcon} from "../../assets/icons/trash.svg";
import {ReactComponent as UsersIcon} from "../../assets/icons/users.svg";
import {ReactComponent as ArrowLeftIcon} from "../../assets/icons/arrow-left.svg";
import {ReactComponent as InfoRed} from "../../assets/icons/info-red.svg";

export type iconsName =
  | "arrow-left"
  | "check"
  | "checkbox-off"
  | "checkbox-on"
  | "close"
  | "edit"
  | "eye-hidden"
  | "eye"
  | "home"
  | "image"
  | "info"
  | "info-red"
  | "loading"
  | "log-off"
  | "menu"
  | "minus"
  | "order"
  | "plus"
  | "profile"
  | "question"
  | "radio-1"
  | "radio"
  | "refresh"
  | "search"
  | "trash"
  | "users";

interface Icon {
  name: iconsName;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const iconList: Icon[] = [
  { icon: ArrowLeftIcon, name: "arrow-left" },
  { icon: CheckIcon, name: "check" },
  { icon: CheckboxOffIcon, name: "checkbox-off" },
  { icon: CheckboxOnIcon, name: "checkbox-on" },
  { icon: CloseIcon, name: "close" },
  { icon: EditIcon, name: "edit" },
  { icon: EyeHiddenIcon, name: "eye-hidden" },
  { icon: EyeIcon, name: "eye" },
  { icon: HomeIcon, name: "home" },
  { icon: ImageIcon, name: "image" },
  { icon: InfoIcon, name: "info" },
  { icon: LoadingIcon, name: "loading" },
  { icon: LogOffIcon, name: "log-off" },
  { icon: MenuIcon, name: "menu" },
  { icon: MinusIcon, name: "minus" },
  { icon: OrderIcon, name: "order" },
  { icon: PlusIcon, name: "plus" },
  { icon: ProfileIcon, name: "profile" },
  { icon: QuestionIcon, name: "question" },
  { icon: Radio1Icon, name: "radio-1" },
  { icon: RadioIcon, name: "radio" },
  { icon: RefreshIcon, name: "refresh" },
  { icon: SearchIcon, name: "search" },
  { icon: TrashIcon, name: "trash" },
  { icon: UsersIcon, name: "users" },
  { icon: InfoRed, name: "info-red" },
];
