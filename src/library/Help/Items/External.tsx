// Copyright 2023 @polkadot-fellows/dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { faExternalLinkAlt as faExt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { useCallback } from "react"
import { ItemWrapper } from "../Wrappers"

export const External = ({
  width,
  height,
  subtitle,
  title,
  url,
  website,
}: any) => {
  const handleClick = useCallback(() => {
    window.open(url, "_blank")
  }, [url])

  return (
    <ItemWrapper width={width} height={height || "auto"}>
      <motion.button
        className="item"
        whileHover={{ scale: 1.004 }}
        whileTap={{ scale: 0.99 }}
        transition={{
          duration: 0.5,
          type: "spring",
          bounce: 0.4,
        }}
        onClick={handleClick}
      >
        <h2>{title}</h2>
        {subtitle}
        <p className="icon">
          <FontAwesomeIcon icon={faExt} className="ext" />
          <p>{website !== undefined && website}</p>
        </p>
      </motion.button>
    </ItemWrapper>
  )
}
