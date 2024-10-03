"use client";
import ChatbotBubble from "@/components/ChatbotBubble";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { data } from "@/lib/data";
import axios from "axios";
import clsx from "clsx";
import {
  ArrowLeftRight,
  BotMessageSquare,
  CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Circle,
  Ellipsis,
  Heart,
  MapPinIcon,
  MessageCircle,
  Send,
  ShoppingCart,
  Sparkles,
  Star,
  TruckIcon,
  X,
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";

const predefinedQuestions = [
  "What are the available sizes?",
  "Is this item currently in stock?",
  "What is the estimated delivery time?",
  "What is the estimated delivery time?",
  "What is the estimated delivery time?",
];

// const images = [
//   "https://cdn-tp3.mozu.com/24645-37138/cms/37138/files/1655a59c-3609-440a-9465-eb13cb9a8bb3?quality=60&_mzcb=_1703879152693",
//   "https://cdn-tp3.mozu.com/24645-37138/cms/37138/files/47430b4e-1624-40a0-9925-fe3d06f6ad4d?quality=60&_mzcb=_1703879152693",
//   "https://cdn-tp3.mozu.com/24645-37138/cms/37138/files/b59cc7f7-29c3-4f94-b891-a5821e52603a?quality=60&_mzcb=_1703879152693",
//   "https://cdn-tp3.mozu.com/24645-37138/cms/37138/files/7a3df487-5a3d-430b-aa96-629acf699935?quality=60&_mzcb=_1703879152693",
// ];

export default function Component({ params }) {
  const [quantity, setQuantity] = useState(1);
  const [messages, setMessages] = useState([
    {
      text: "Welcome to our customer service chat. How may I assist you today?",
      isBot: true,
      id: 1,
    },
  ]);
  const [buttons, setButtons] = useState([]);

  const getProductdetails = () => {
    return data?.filter((item) => item?.item_number == params?.slug);
  };

  const productDetails = getProductdetails();
  console.log(productDetails);
  const [currentImage, setCurrentImage] = useState(
    productDetails?.[0]?.images_url?.[0]
  );
  const [sliderIndex, setSliderIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleImageClick = (image, index) => {
    setCurrentImage(image);
    setSliderIndex(index);
  };

  const handlePrevious = () => {
    setSliderIndex((prevIndex) => {
      const newIndex =
        prevIndex > 0
          ? prevIndex - 1
          : productDetails?.[0]?.images_url?.length - 1;
      setCurrentImage(productDetails?.[0]?.images_url[newIndex]);
      return newIndex;
    });
  };

  const handleNext = () => {
    setSliderIndex((prevIndex) => {
      const newIndex =
        prevIndex < productDetails?.[0]?.images_url?.length - 1
          ? prevIndex + 1
          : 0;
      setCurrentImage(productDetails?.[0]?.images_url[newIndex]);
      return newIndex;
    });
  };
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentTypingText, setCurrentTypingText] = useState("");
  const scrollAreaRef = useRef(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async (id, question) => {
    // if (question.trim() === "") return;

    const newUserMessage = {
      text: question,
      isBot: false,
      id: Date.now(),
    };

    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setInputText("");
    setIsTyping(true);
    // scrollToBottom();

    try {
      setLoading(true);
      const result = await axios.post("/api/bot", {
        userInput: id.toString(),
      });

      const responseString = result?.data?.botResponses?.[0];
      // Find the starting point of the JSON array (the first '[' character)
      const jsonArrayString = responseString.slice(
        0,
        responseString.indexOf("[")
      );

      let index = 0;

      const typingInterval = setInterval(() => {
        if (index < jsonArrayString?.length) {
          setLoading(false);
          setCurrentTypingText((prev) => prev + jsonArrayString[index]);
          index++;
        } else {
          setLoading(false);
          clearInterval(typingInterval);
          setIsTyping(false);
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              text: jsonArrayString,
              isBot: true,
              id: Date.now(),
            },
          ]);

          setCurrentTypingText("");
        }
      }, 40);
    } catch (err) {
      let index = 0;
      const apiResponse = "Sorry, I couldn't process your request.";
      const typingInterval = setInterval(() => {
        if (index < apiResponse?.length) {
          setLoading(false);
          setCurrentTypingText((prev) => prev + apiResponse[index]);
          index++;
        } else {
          setLoading(false);
          clearInterval(typingInterval);
          setIsTyping(false);
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              text: apiResponse,
              isBot: true,
              id: Date.now(),
            },
          ]);

          setCurrentTypingText("");
        }
      }, 30); // Store any error that occurs during the request
    }
  };

  useEffect(() => {
    // Only scroll to bottom when a new message is added
    if (messages.length > 1) {
      const timer = setTimeout(() => {
        scrollToBottom();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [messages]);

  const shippingInfo = {
    date: "2023-09-28",
    location: "New York, NY 10001",
    status: "In Transit",
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(isNaN(newQuantity) ? 1 : Math.max(1, newQuantity));
  };

  useEffect(() => {
    const postData = async () => {
      try {
        const result = await axios.post("/api/bot", {
          userInput: "123",
        });

        console.log(JSON.parse(result.data?.botResponses?.[0]));
        setButtons(JSON.parse(result.data?.botResponses?.[0])); // Store the API response data
      } catch (err) {
        console.log(err.message); // Store any error that occurs during the request
      }
    };

    postData();
  }, []);

  // useEffect(() => {
  //   // Initialize the chatbot loader after the page has loaded
  //   const loaderOpts = {
  //     baseUrl: "https://d3p1ej7da3m9bg.cloudfront.net",
  //     shouldLoadMinDeps: true,
  //   };

  //   // Ensure ChatBotUiLoader is available in the global scope
  //   if (window.ChatBotUiLoader) {
  //     const loader = new window.ChatBotUiLoader.IframeLoader(loaderOpts);

  //     loader.load(loader).catch((error) => {
  //       console.error("Chatbot loading error:", error);
  //     });
  //   } else {
  //     console.error("ChatBotUiLoader is not available.");
  //   }
  // }, []);

  const formatKey = (key) => {
    return key
      .replace(/_/g, " ") // Replace underscores with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
  };

  if (!productDetails) {
    return <div>Loading...</div>; // Show a loading state while data is being fetched
  }

  return (
    <>
      <Head>
        {/* Include external script for chatbot loader */}
        <script
          src="https://d3p1ej7da3m9bg.cloudfront.net/lex-web-ui-loader.min.js"
          async
        ></script>
      </Head>

      <div className="min-w-screen min-h-screen mt-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:flex lg:items-start lg:space-x-8">
            {/* Left column: Images and Chat */}
            <div className="lg:w-1/2 space-y-6">
              {/* Product Images */}
              <div className="xl:aspect-square">
                <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                  <InnerImageZoom
                    src={currentImage}
                    zoomSrc={currentImage}
                    alt="Product Image"
                    zoomType="hover"
                    className="object-contain w-full h-full"
                    zoomPreload={true}
                    fullscreenOnMobile={true}
                    moveType="pan"
                  />
                </div>
                <div className="relative mt-4">
                  <button
                    onClick={handlePrevious}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <ScrollArea className="w-full">
                    <div className="flex space-x-2 py-2 px-8">
                      {productDetails?.[0].images_url?.map((image, index) => (
                        <>
                          <button
                            key={index}
                            onClick={() => handleImageClick(image, index)}
                            className={`flex-shrink-0 ${
                              index === sliderIndex
                                ? "ring-2 ring-blue-500"
                                : ""
                            }`}
                          >
                            <Image
                              src={image}
                              alt={`Product thumbnail ${index + 1}`}
                              width={80}
                              height={80}
                              className="object-cover rounded-md"
                            />
                          </button>
                        </>
                      ))}
                    </div>
                  </ScrollArea>
                  <button
                    onClick={handleNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Chat Section */}
              <div className="pt-2">
                <div className="p-3 flex items-center justify-start gap-2">
                  <BotMessageSquare className="w-8 h-8" />
                  <p className="text-xl font-bold">RetailGenie</p>
                </div>
                <div className="w-full space-y-4">
                  <ScrollArea
                    className="h-[200px] w-full border border-gray-300 rounded-md p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                    ref={scrollAreaRef}
                  >
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${
                          message.isBot ? "justify-start" : "justify-end"
                        } mb-4`}
                      >
                        <div
                          className={`flex items-end ${
                            message.isBot ? "flex-row" : "flex-row-reverse"
                          }`}
                        >
                          <Avatar
                            className={`w-8 h-8 ${
                              message.isBot ? "mr-2" : "ml-2"
                            }`}
                          >
                            <AvatarImage
                              src={
                                message.isBot
                                  ? "/placeholder.svg?height=32&width=32"
                                  : "/placeholder.svg?height=32&width=32"
                              }
                            />
                            <AvatarFallback
                              className={clsx(
                                "text-sm",
                                message.isBot ? "bg-[#d40029] text-white" : ""
                              )}
                            >
                              {message.isBot ? "AI" : "You"}
                            </AvatarFallback>
                          </Avatar>
                          <div
                            className={`px-4 py-2 rounded-lg ${
                              message.isBot
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100"
                                : "bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100"
                            } shadow-md`}
                          >
                            {message.text}
                          </div>
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start mb-4">
                        <div className="flex items-end">
                          <Avatar className="w-8 h-8 mr-2">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" />
                            <AvatarFallback className="text-sm bg-[#d40029] text-white">
                              AI
                            </AvatarFallback>
                          </Avatar>
                          <div className="px-4 py-2 rounded-lg bg-blue-100 text-blue-800 dark:bg-[#e85a7a] dark:text-blue-100 shadow-md">
                            {loading ? (
                              <ThreeDotLoader />
                            ) : (
                              <>
                                {currentTypingText}
                                <span className="typing-cursor">|</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </ScrollArea>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {buttons?.map((btn, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        disabled={loading}
                        size="sm"
                        onClick={() =>
                          handleSendMessage(btn?.id, btn?.question)
                        }
                        className="border-blue-300 text-blue-600 hover:bg-blue-50 dark:border-blue-600 dark:text-blue-300 dark:hover:bg-blue-900/50 transition-all duration-300 transform hover:scale-105"
                      >
                        {btn?.question}
                      </Button>
                    ))}
                  </div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendMessage(inputText);
                    }}
                    className="flex space-x-2"
                  >
                    <Input
                      type="text"
                      placeholder="Type your message here..."
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      className="flex-grow border-gray-300 focus:border-gray-300 focus:ring-gray-300 dark:border-blue-600 dark:focus:border-blue-400 dark:focus:ring-blue-400 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                    />
                    <Button
                      type="submit"
                      disabled={loading}
                      className="bg-[#d40029] hover:bg-[#d40029] text-white transition-all duration-300 transform hover:scale-105"
                    >
                      <Send className="h-5 w-5" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Right column: Product Details and Specifications */}
            {productDetails?.map((product, index) => (
              <div className="lg:w-1/2 mt-8 lg:mt-0 space-y-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-600 dark:text-blue-200">
                    {product?.title}
                  </h1>
                  <p className="text-sm font-light tracking-wider text-gray-600 dark:text-gray-400">
                    Item # {product?.item_number} | Mfr # {product?.mfr_number}
                  </p>
                  <div className="flex items-center space-x-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < 4
                            ? "text-[#d40029] fill-[#d40029]"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                      (4.0)
                    </span>
                  </div>
                </div>

                <div>
                  <p className="relative text-3xl font-bold mb-2 text-[#121212ed] dark:text-blue-300">
                    <span className="absolute -top-4 left-0 right-0 text-sm text-[#121212a8]">
                      Price
                    </span>{" "}
                    {product?.price}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {product?.overview}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <Label htmlFor="quantity" className="text-sm font-medium">
                        Quantity:
                      </Label>
                      <Input
                        id="quantity"
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="w-20"
                      />
                    </div>
                    <Button className="bg-[#d40029] hover:bg-[#d40029] text-white transition-all duration-300 transform hover:scale-105">
                      <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      className="border-blue-400 text-blue-600 hover:bg-blue-100 dark:border-blue-500 dark:text-blue-300 dark:hover:bg-blue-900 transition-all duration-300 transform hover:scale-105"
                    >
                      <Heart className="mr-2 h-4 w-4" /> Save for Later
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100"
                    >
                      Adjustable Thermostat
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                    >
                      Eco-Friendly
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100"
                    >
                      Machine Washable
                    </Badge>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <TruckIcon className="h-6 w-6" />
                        <span>Shipping Information</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">
                              Estimated Delivery Date
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {shippingInfo.date}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPinIcon className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">Shipping To</p>
                            <p className="text-sm text-muted-foreground">
                              {shippingInfo.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ArrowLeftRight className="h-5 w-5" />
                        Return Policy
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>30-day return window</li>
                        <li>Items must be unused and in original packaging</li>
                        <li>Free returns on eligible items</li>
                        <li>Refund processed within 5-7 business days</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View Full Policy
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <Card className="">
                  <CardHeader>
                    <CardTitle className="text-md flex items-center gap-2">
                      Specifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li>
                        <strong>Brand Name:</strong> {product?.brand_name}
                      </li>
                      <li>
                        <strong>Product Type:</strong> {product?.product_type}
                      </li>
                      <li>
                        <strong>Air Volume:</strong> {product?.air_volume}
                      </li>
                      <li>
                        <strong>Color:</strong> {product?.color}
                      </li>
                      <li>
                        <strong>Commercial or Residential:</strong>{" "}
                        {product?.commercial_or_residential}
                      </li>
                      <li>
                        <strong>Depth:</strong> {product?.depth}
                      </li>
                      <li>
                        <strong>ETL Listed:</strong> {product?.etl_listed}
                      </li>
                      <li>
                        <strong>Height:</strong> {product?.height}
                      </li>
                      <li>
                        <strong>Number of Speed Settings:</strong>{" "}
                        {product?.number_of_speed_settings}
                      </li>
                      <li>
                        <strong>Packaging Type:</strong>{" "}
                        {product?.packaging_type}
                      </li>
                      <li>
                        <strong>Portable:</strong> {product?.portable}
                      </li>
                      <li>
                        <strong>Remote Control:</strong>{" "}
                        {product?.remote_control}
                      </li>
                      <li>
                        <strong>UL Listed:</strong> {product?.ul_listed}
                      </li>
                      <li>
                        <strong>Volts:</strong> {product?.volts}
                      </li>
                      <li>
                        <strong>Warranty:</strong> {product?.warranty}
                      </li>
                      <li>
                        <strong>Width:</strong> {product?.width}
                      </li>
                      <li>
                        <strong>Sub Brand:</strong> {product?.sub_brand}
                      </li>
                      <li>
                        <strong>Amps:</strong> {product?.amps}
                      </li>
                      <li>
                        <strong>Bluetooth:</strong> {product?.bluetooth}
                      </li>
                      <li>
                        <strong>CARB Compliant:</strong>{" "}
                        {product?.carb_compliant}
                      </li>
                      <li>
                        <strong>Low Oil Shutdown:</strong>{" "}
                        {product?.low_oil_shutdown}
                      </li>
                      <li>
                        <strong>Wheel Kit Included:</strong>{" "}
                        {product?.wheel_kit_included}
                      </li>
                      <li>
                        <strong>Powered By:</strong> {product?.powered_by}
                      </li>
                      <li>
                        <strong>Running Watts:</strong> {product?.running_watts}
                      </li>
                      <li>
                        <strong>Starting Watts:</strong>{" "}
                        {product?.starting_watts}
                      </li>
                      <li>
                        <strong>CO Shutdown:</strong> {product?.co_shutdown}
                      </li>
                      <li>
                        <strong>Generator Type:</strong>{" "}
                        {product?.generator_type}
                      </li>
                      <li>
                        <strong>Kit or Tool Only:</strong>{" "}
                        {product?.kit_or_tool_only}
                      </li>
                      <li>
                        <strong>Inverter:</strong> {product?.inverter}
                      </li>
                      <li>
                        <strong>What's Included:</strong>{" "}
                        {product?.what_included}
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View More
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <ChatbotBubble />
      </div>
    </>
  );
}

const ThreeDotLoader = () => (
  <div className="p-2 flex space-x-1">
    {[0, 1, 2].map((index) => (
      <div
        key={index}
        className="w-1 h-1 bg-blue-800 dark:bg-blue-100 rounded-full animate-bounce"
        style={{ animationDelay: `${index * 0.15}s` }}
      />
    ))}
  </div>
);
