import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    className?: string;
    width?: number | string;
    height?: number | string;
}

export const OptimizedImage = ({
    src,
    alt,
    className,
    width,
    height,
    ...props
}: OptimizedImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        if (img.complete) {
            setIsLoaded(true);
        } else {
            img.onload = () => setIsLoaded(true);
        }
    }, [src]);

    return (
        <div
            className={cn("relative overflow-hidden", className)}
            style={{ width: width || "auto", height: height || "auto" }}
        >
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200/20 animate-pulse" />
            )}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                onLoad={() => setIsLoaded(true)}
                className={cn(
                    "transition-opacity duration-500 ease-in-out w-full h-full object-cover",
                    isLoaded ? "opacity-100" : "opacity-0"
                )}
                {...props}
            />
        </div>
    );
};
