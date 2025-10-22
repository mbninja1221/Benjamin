import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  emoji?: string;
  loading?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  type = 'button',
  disabled = false,
  emoji,
  loading = false,
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const baseStyles = 'relative inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg overflow-hidden group';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:shadow-blue-500/25',
    secondary: 'bg-white/10 backdrop-blur-lg text-white hover:bg-white/20',
    outline: 'border-2 border-white/20 text-white hover:bg-white/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonContent = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {loading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
          />
        ) : (
          emoji && (
            <motion.span
              animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              {emoji}
            </motion.span>
          )
        )}
        {children}
      </span>
      {variant === 'primary' && (
        <>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100"
            initial={false}
            animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.3 }}
          />
        </>
      )}
    </>
  );

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={buttonClasses}
        onClick={onClick}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button; 