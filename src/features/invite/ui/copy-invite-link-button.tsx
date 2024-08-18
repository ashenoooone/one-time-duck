import { TELEGRAM_BOT_LINK } from "@/shared/consts";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/utils";
import { ClipboardCheck } from "lucide-react";
import React, { ReactNode, useCallback, useState } from "react";

type CopyInviteLinkButtonProps = {
  className?: string;
  userId?: number;
};

export const CopyInviteLinkButton = React.memo(
  (props: CopyInviteLinkButtonProps) => {
    const { className, userId } = props;
    const [text, setText] = useState<ReactNode>("Copy invite link");

    const handleCopyInviteLinkClick = useCallback(() => {
      const link = userId
        ? `${TELEGRAM_BOT_LINK}/join?startapp=${userId}`
        : TELEGRAM_BOT_LINK;

      navigator.clipboard.writeText(link).then(() => {
        setText(
          <>
            Copied
            <ClipboardCheck className="ml-1" />
          </>
        );
        setTimeout(() => setText("Copy invite link"), 2000); // Вернуть текст через 2 секунды
      });
    }, [userId]);

    return (
      <Button className={cn("", className)} onClick={handleCopyInviteLinkClick}>
        {text}
      </Button>
    );
  }
);

CopyInviteLinkButton.displayName = "CopyInviteLinkButton";
