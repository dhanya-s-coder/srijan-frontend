import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./PageHeader.css";

const PageHeader = ({ 
  title, 
  subtitle, 
  showBackButton = true, 
  backPath = "/",
  titleDelay = 0.2,
  showStars = true 
}) => {
  const navigate = useNavigate();

  return (
    <>
      {showBackButton && (
        <motion.button
          className="page-back-button"
          onClick={() => navigate(backPath)}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 20px rgba(254, 208, 0, 0.5)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>BACK</span>
        </motion.button>
      )}

      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: titleDelay }}
      >
        <motion.div
          className="page-title-decoration top"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: titleDelay + 0.2 }}
        />
        
        <h1 className="page-title">
          {showStars && <span className="page-title-star">✦</span>}
          {title}
          {showStars && <span className="page-title-star">✦</span>}
        </h1>
        
        {subtitle && (
          <p className="page-subtitle">
            {subtitle}
          </p>
        )}
        
        <motion.div
          className="page-title-decoration bottom"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: titleDelay + 0.4 }}
        />
      </motion.div>
    </>
  );
};

export default PageHeader;