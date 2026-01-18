import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    ChevronLeft,
    ChevronRight,
    ExternalLink,
    Github,
    Monitor,
    Smartphone,
    X
} from 'lucide-react';
import { useState } from 'react';

interface ProjectDemoProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    type: string;
    github: string;
    demo?: string;
    status: string;
    color: string;
    demoType?: 'video' | 'iframe' | 'images';
    demoContent?: {
      videoUrl?: string;
      iframeUrl?: string;
      images?: string[];
      mockupImages?: string[];
    };
  };
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDemo = ({ project, isOpen, onClose }: ProjectDemoProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePrevImage = () => {
    if (project.demoContent?.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.demoContent.images!.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (project.demoContent?.images) {
      setCurrentImageIndex((prev) => 
        prev === project.demoContent.images!.length - 1 ? 0 : prev + 1
      );
    }
  };

  if (!isOpen) return null;

  const renderDemo = () => {
    if (!project.demoContent) {
      return (
        <div className="flex flex-col items-center justify-center h-64 bg-secondary/20 rounded-lg">
          <Monitor className="h-16 w-16 text-muted-foreground mb-4" />
          <p className="text-muted-foreground text-center">
            Demo coming soon! Check out the GitHub repository for code samples.
          </p>
          <Button
            className="mt-4"
            variant="outline"
            onClick={() => window.open(project.github, '_blank')}
          >
            <Github className="h-4 w-4 mr-2" />
            View Code
          </Button>
        </div>
      );
    }

    switch (project.demoType) {
      case 'video':
        return (
          <div className="relative">
            <video
              className="w-full rounded-lg"
              controls
              poster="/api/placeholder/800/450"
            >
              <source src={project.demoContent.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        );

      case 'iframe':
        return (
          <div className="relative bg-white rounded-lg overflow-hidden">
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 border-b">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 text-center text-sm text-gray-600">
                {project.demoContent.iframeUrl}
              </div>
            </div>
            <iframe
              src={project.demoContent.iframeUrl}
              className="w-full h-96 border-0"
              title={`${project.title} Demo`}
            />
          </div>
        );

      case 'images':
        return (
          <div className="space-y-4">
            {/* Main Image Display */}
            <div className="relative flex justify-center group">
              <img
                src={project.demoContent.images?.[currentImageIndex] || '/api/placeholder/800/450'}
                alt={`${project.title} Screenshot ${currentImageIndex + 1}`}
                className={`rounded-lg shadow-lg ${project.type === 'Mobile App' ? 'max-h-[600px] w-auto' : 'w-full'}`}
              />
              
              {/* Navigation Arrows */}
              {project.demoContent.images && project.demoContent.images.length > 1 && (
                <>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                    onClick={handlePrevImage}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                    onClick={handleNextImage}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </>
              )}
              
              {/* Image Navigation */}
              {project.demoContent.images && project.demoContent.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {project.demoContent.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex 
                          ? 'bg-primary' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Thumbnail Strip */}
            {project.demoContent.images && project.demoContent.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {project.demoContent.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-16 rounded border-2 transition-colors ${
                      index === currentImageIndex 
                        ? 'border-primary' 
                        : 'border-transparent hover:border-primary/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover rounded"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        );

      default:
        return (
          <div className="flex flex-col items-center justify-center h-64 bg-secondary/20 rounded-lg">
            <Smartphone className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-muted-foreground text-center">
              Interactive demo not available. Visit the live demo or GitHub repository.
            </p>
          </div>
        );
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <Card className="w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <CardContent className="p-0">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                {project.type === 'Mobile App' ? (
                  <Smartphone className="h-5 w-5 text-white" />
                ) : (
                  <Monitor className="h-5 w-5 text-white" />
                )}
              </div>
              <div>
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <p className="text-muted-foreground">{project.type}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="hover:bg-destructive hover:text-destructive-foreground"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Demo Content */}
          <div className="p-6">
            {renderDemo()}
          </div>

          {/* Project Info */}
          <div className="p-6 border-t border-border bg-secondary/10">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">
              {project.github && (
                <Button
                  variant="outline"
                  onClick={() => window.open(project.github, '_blank')}
                  className="flex-1"
                >
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </Button>
              )}
              {project.demo && (
                <Button
                  onClick={() => window.open(project.demo, '_blank')}
                  className={`flex-1 bg-gradient-primary hover:glow-primary ${!project.github ? 'w-full' : ''}`}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
              )}
              {!project.github && !project.demo && (
                <div className="flex-1 text-center text-muted-foreground text-sm py-2">
                  This project is currently in development
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
