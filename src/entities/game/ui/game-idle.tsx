import { Button } from "@/shared/ui/button";
import { Typography } from "@/shared/ui/typography";
import { cn } from "@/shared/utils";
import Duck from "@/shared/assets/friends.png";
import React, { useCallback } from "react";
import { gameStore } from "../model/game.store";
import { userStore } from "@/entities/user/model/user.store";

type GameIdleProps = {
  className?: string;
};

export const GameIdle = React.memo((props: GameIdleProps) => {
  const { className } = props;
  const setGameStatus = gameStore.use.setGameStatus();
  const user = userStore.use.me();

  const onStartGameButtonClick = useCallback(() => {
    setGameStatus("loading");
  }, []);

  return (
    <div
      className={cn("flex flex-col gap-1 items-center text-center", className)}
    >
      <div className="text-center">
        <Typography variant={"h6"} className="font-bold">
          Countdown game
        </Typography>
        <Typography variant={"caption"} className="text-text-secondary mt-1">
          Stop the timer as close as possible to the target number.
        </Typography>
      </div>
      {user?.gameAvailable ? (
        <div>
          <Typography variant={"subtitle-1"} className="font-bold">
            You have {user?.tickets} 🎟
          </Typography>
          <Button onClick={onStartGameButtonClick} className="mt-3">
            Start game -1 🎟
          </Button>
        </div>
      ) : (
        <Typography variant={"body-1"} className="font-bold mt-3">
          You don`t have tickets 😢
        </Typography>
      )}
      <img src={Duck} alt="lovely duck" className="w-28 mt-4" />
    </div>
  );
});

GameIdle.displayName = "GameIdle";
