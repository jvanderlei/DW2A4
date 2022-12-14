import { ChatTeardropDots } from "phosphor-react";
import { Popover} from '@headlessui/react'
import { WidgetForm } from "./WidgetForm";

export function Widget() {

  return (
    <Popover className="absolute bottom-6 right-6 flex md:bottom-10 md:right-10 flex-col items-end ">
        <Popover.Panel>
            <WidgetForm />
        </Popover.Panel>
      <Popover.Button className="bg-brand-500 text-white rounded-full px-3 h-12 flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2">Feedback</span>
        </span>
      </Popover.Button>
    </Popover>
  );
}
