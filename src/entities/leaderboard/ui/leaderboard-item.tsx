import { cn } from "@/shared/utils";
import React, { useMemo } from "react";
import { LeaderBoardUserType } from "../model/types";
import { Avatar, Text } from "@telegram-apps/telegram-ui";
import { getUserAvatar } from "../model/utils";

type LeaderboardItemProps = {
  user: LeaderBoardUserType;
};

export const LeaderboardItem = React.memo((props: LeaderboardItemProps) => {
  const { user } = props;

  const userPosition = useMemo(() => {
    if (user.position === 1) {
      return "🥇";
    }
    if (user.position === 2) {
      return "🥈";
    }
    if (user.position === 3) {
      return "🥉";
    }
    return `#${user.position}`;
  }, []);

  return (
    <div className={cn("flex justify-between items-center w-full")}>
      <div className="flex gap-2 items-center">
        <Avatar size={48} src={getUserAvatar(user)} />
        <div className="flex flex-col">
          <Text weight="3">{user.username}</Text>
          <Text weight="3">{user.balance}</Text>
        </div>
      </div>
      <Text weight="2">{userPosition}</Text>
    </div>
  );
});

LeaderboardItem.displayName = "LeaderboardItem";
