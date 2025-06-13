'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Video, Star, Users } from "lucide-react";

interface Webinar {
  id: number;
  title: string;
  speaker: string;
  date: string;
  time: string;
  duration: string;
  description: string;
  topic: string;
  registrations: number;
  isPopular?: boolean;
}

const mockWebinars: Webinar[] = [
  {
    id: 1,
    title: "Essential Newborn Care: First 30 Days",
    speaker: "Dr. Sumitra Meena",
    date: "2024-01-15",
    time: "7:00 PM",
    duration: "45 mins",
    description: "Learn the fundamentals of caring for your newborn during their crucial first month, including feeding, sleeping, and health monitoring.",
    topic: "Newborn Care",
    registrations: 847,
    isPopular: true
  },
  {
    id: 2,
    title: "Breastfeeding Success: Tips from Lactation Experts",
    speaker: "Dr. Priya Sharma",
    date: "2024-01-18",
    time: "6:30 PM",
    duration: "60 mins",
    description: "Comprehensive guidance on establishing successful breastfeeding routines, overcoming common challenges, and ensuring proper nutrition.",
    topic: "Feeding",
    registrations: 623,
  },
  {
    id: 3,
    title: "Sleep Training: Gentle Methods for Better Nights",
    speaker: "Dr. Rajesh Kumar",
    date: "2024-01-22",
    time: "8:00 PM",
    duration: "50 mins",
    description: "Explore gentle, effective sleep training techniques that work for both baby and parents, creating healthy sleep habits early on.",
    topic: "Sleep",
    registrations: 512,
  },
  {
    id: 4,
    title: "Baby's First Foods: Introduction to Solids",
    speaker: "Dr. Sumitra Meena",
    date: "2024-01-25",
    time: "7:30 PM",
    duration: "55 mins",
    description: "Navigate the exciting journey of introducing solid foods with expert guidance on timing, safety, and nutritional considerations.",
    topic: "Nutrition",
    registrations: 389,
  }
];

const getTopicColor = (topic: string) => {
  const colors: Record<string, string> = {
    "Newborn Care": "bg-blue-100 text-blue-800 border-blue-200",
    "Feeding": "bg-green-100 text-green-800 border-green-200",
    "Sleep": "bg-purple-100 text-purple-800 border-purple-200",
    "Nutrition": "bg-orange-100 text-orange-800 border-orange-200",
  };
  return colors[topic] || "bg-gray-100 text-gray-800 border-gray-200";
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

const handleViewDetails = (webinarId: number) => {
  console.log(`Viewing details for webinar ID: ${webinarId}`);
};

export default function WebinarsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Video className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-4xl font-bold text-gray-900">Live Webinars</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our expert pediatricians and child care specialists for live sessions designed to support you on your parenting journey
            </p>
            <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                <span>2,000+ Parents Joined</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                <span>4.9/5 Average Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Webinars Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {mockWebinars.map((webinar) => (
            <Card 
              key={webinar.id} 
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <Badge 
                    variant="outline" 
                    className={`${getTopicColor(webinar.topic)} font-medium`}
                  >
                    {webinar.topic}
                  </Badge>
                  {webinar.isPopular && (
                    <Badge className="bg-gradient-to-r from-orange-400 to-pink-400 text-white border-0">
                      <Star className="h-3 w-3 mr-1 fill-white" />
                      Popular
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {webinar.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {webinar.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="font-medium">{webinar.speaker}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-green-500" />
                    <span>{webinar.registrations} registered</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <div className="flex items-center text-sm text-gray-700">
                    <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="font-medium">{formatDate(webinar.date)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-700">
                      <Clock className="h-4 w-4 mr-2 text-green-500" />
                      <span>{webinar.time} • {webinar.duration}</span>
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <Button 
                  onClick={() => handleViewDetails(webinar.id)}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-2.5 transition-all duration-300 group-hover:shadow-lg"
                >
                  <Video className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Can't find what you're looking for?
            </h3>
            <p className="text-gray-600 mb-6">
              Our experts are here to help. Schedule a personalized consultation or request a specific topic for our next webinar.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" className="font-medium">
                Request a Topic
              </Button>
              <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 font-medium">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}