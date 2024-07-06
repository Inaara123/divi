"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  lineSpacing = "mt-4",
}: {
  words: string[];
  className?: string;
  lineSpacing?: string;
  
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.map((line) => line.split(" "));

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((line, lineIdx) => (
          <div key={lineIdx}>
            {line.map((word, wordIdx) => (
              <motion.span
                key={word + wordIdx}
                className="dark:text-dark-pink text-light-pink opacity-0"
              >
                {word}{" "}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-dark-pink text-light-pink text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};