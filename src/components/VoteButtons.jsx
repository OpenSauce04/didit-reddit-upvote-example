"use client";

import { useFormStatus } from "react-dom";
import clsx from "clsx";
import {
  TbArrowBigDown,
  TbArrowBigDownFilled,
  TbArrowBigUp,
  TbArrowBigUpFilled,
} from "react-icons/tb";
import { FaSpinner } from "react-icons/fa";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export function VoteButtons({ upvote, downvote, votes, existingVote, isLoggedIn }) {
  const { pending, data, method, action } = useFormStatus();

  function generateButtons(onClick, upvote, downvote) {
  return (
    <>
      <button onClick={onClick} formAction={upvote}>
        {existingVote?.vote === 1 ? (
          <TbArrowBigUpFilled
            size={24}
            className={clsx("hover:text-orange-600", {
              "text-pink-300": existingVote?.vote === 1,
            })}
          />
        ) : (
          <TbArrowBigUp
            size={24}
            className={clsx("hover:text-orange-600", {
              "text-pink-300": existingVote?.vote === 1,
            })}
          />
        )}
      </button>
      <span className="w-6 text-center tabular-nums">
        {pending ? (
          <span className="animate-spin h-6  w-6 flex items-center justify-center">
            <FaSpinner />
          </span>
        ) : (
          votes
        )}
      </span>
      <button onClick={onClick} formAction={downvote}>
        {existingVote?.vote === -1 ? (
          <TbArrowBigDownFilled
            size={24}
            className={clsx("hover:text-blue-600", {
              "text-blue-300": existingVote?.vote === -1,
            })}
          />
        ) : (
          <TbArrowBigDown
            size={24}
            className={clsx("hover:text-blue-600", {
              "text-blue-300": existingVote?.vote === -1,
            })}
          />
        )}
      </button>
    </>
  );
  }

  // This was the most elegant solution I could come up with. The blood is on NextJS's hands.
  if (isLoggedIn) {
    return generateButtons(
      null,
      upvote,
      downvote
    )
  } else {
    return generateButtons(
      () => Toastify({
        text: "You need to log in before voting.",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
          background: "red",
        }
      }).showToast(),
      null,
      null
    )
  }
}
