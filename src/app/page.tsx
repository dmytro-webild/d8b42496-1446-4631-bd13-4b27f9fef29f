"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Activity, Calendar, Sparkles, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="small"
        sizing="largeSmallSizeMediumTitles"
        background="circleGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Features",
          id: "#features",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Pricing",
          id: "#pricing",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      logoSrc="http://img.b2bpic.net/free-vector/collection-blue-fitness-badges_23-2147795728.jpg"
      logoAlt="Karachi Club GYM logo"
      brandName="Karachi Club GYM"
      bottomLeftText="Your Fitness Partner"
      bottomRightText="info@karachiclubgym.com"
    />
  </div>

  <div id="home" data-section="home">
      <HeroCarouselLogo
      logoText="Karachi Club GYM"
      description="Your Journey to Fitness Starts Here. Unleash Your Potential, Achieve Your Goals."
      buttons={[
        {
          text: "Join Now",
          href: "#contact",
        },
        {
          text: "Explore Classes",
          href: "#features",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-foam-roller_23-2151817414.jpg",
          imageAlt: "Diverse group working out in a modern gym",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/group-yogi-people-warrior-two-pose_1163-4976.jpg",
          imageAlt: "Cardio machines in a modern gym with natural light",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-people-training-together-gym_23-2149445923.jpg",
          imageAlt: "High energy group fitness class with an instructor",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/bald-man-amidst-dumbbells-looking-away_23-2147687595.jpg",
          imageAlt: "Person stretching before a workout in a gym studio",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/training-items-athletics_23-2151077747.jpg",
          imageAlt: "Sleek, modern gym interior with organized weights",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/determined-african-american-athletic-woman-making-effort-while-exercising-chinups-park-sunset_637285-4331.jpg",
          imageAlt: "Gym members cheering and high-fiving after a workout",
        },
      ]}
      autoplayDelay={4000}
      showDimOverlay={true}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="More Than Just a Gym, It's a Community"
      metrics={[
        {
          icon: Users,
          label: "Members",
          value: "5000+",
        },
        {
          icon: Activity,
          label: "Equipment",
          value: "100+",
        },
        {
          icon: Calendar,
          label: "Classes",
          value: "50+",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Personalized Training",
          description: "Expert trainers create custom workout plans tailored to your goals and fitness level.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-pink-top-standing-with-coach_1157-32123.jpg",
          imageAlt: "Personal trainer guiding a client with weights",
          buttonIcon: "ArrowRight",
          buttonHref: "#",
        },
        {
          title: "Diverse Group Classes",
          description: "Enjoy a variety of high-energy classes, from yoga and Zumba to spinning and HIIT.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-women-with-yoga-mats_23-2149161281.jpg",
          imageAlt: "Energetic group fitness class in a studio",
          buttonIcon: "ArrowRight",
          buttonHref: "#",
        },
        {
          title: "State-of-the-Art Equipment",
          description: "Access the latest cardio, strength, and functional training equipment for effective workouts.",
          imageSrc: "http://img.b2bpic.net/free-photo/digital-tablet-with-black-display-gym-equipments-blue-backdrop_23-2148041427.jpg",
          imageAlt: "Modern gym equipment for strength training",
          buttonIcon: "ArrowRight",
          buttonHref: "#",
        },
        {
          title: "Wellness & Recovery",
          description: "Relax and rejuvenate with our sauna, steam room, and specialized recovery services.",
          imageSrc: "http://img.b2bpic.net/free-photo/female-therapist-rehabilitation-center-giving-back-massage_23-2150356750.jpg",
          imageAlt: "Wellness spa area in a gym with a sauna",
          buttonIcon: "ArrowRight",
          buttonHref: "#",
        },
      ]}
      title="Achieve Your Best Self"
      description="Our comprehensive programs and state-of-the-art facilities are designed to help you reach new heights in fitness, strength, and wellness."
    />
  </div>

  <div id="services" data-section="services">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "One-on-One Coaching",
          price: "$100/session",
          imageSrc: "http://img.b2bpic.net/free-photo/guy-lifting-dumbbell-gym_23-2147688511.jpg",
          imageAlt: "Personal training session with a trainer",
        },
        {
          id: "2",
          name: "Group Fitness Classes",
          price: "Included in Membership",
          imageSrc: "http://img.b2bpic.net/free-photo/females-working-out-together_23-2148387793.jpg",
          imageAlt: "Group Zumba class with energetic participants",
        },
        {
          id: "3",
          name: "Nutritional Guidance",
          price: "$75/consultation",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-woman-cutting-strawberries_23-2149894973.jpg",
          imageAlt: "Nutritional counseling session with a healthy meal plan",
        },
        {
          id: "4",
          name: "Premium Locker Access",
          price: "$15/month",
          imageSrc: "http://img.b2bpic.net/free-photo/adult-man-making-cardio-training-exercises-gym-club-closeup-horizontal_1220-1707.jpg",
          imageAlt: "Modern gym locker rooms",
        },
        {
          id: "5",
          name: "Fitness Assessments",
          price: "$50/assessment",
          imageSrc: "http://img.b2bpic.net/free-photo/data-stats-around-person-doing-physical-activity_23-2150165179.jpg",
          imageAlt: "Fitness assessment with body composition analysis",
        },
        {
          id: "6",
          name: "Corporate Wellness Programs",
          price: "Custom Quote",
          imageSrc: "http://img.b2bpic.net/free-photo/colleagues-office-stretching-work-day_23-2150468562.jpg",
          imageAlt: "Group of colleagues participating in a corporate wellness program",
        },
      ]}
      title="Our Premium Services"
      description="Discover a range of services designed to enhance your fitness journey, from personalized training to specialized classes and wellness programs."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "basic",
          badge: "Value",
          price: "$50/month",
          subtitle: "Access to all gym facilities",
          buttons: [
            {
              text: "Choose Plan",
              href: "#contact",
            },
          ],
          features: [
            "Cardio & Strength Access",
            "Standard Group Classes",
            "Locker Room Access",
          ],
        },
        {
          id: "premium",
          badge: "Popular",
          badgeIcon: Sparkles,
          price: "$80/month",
          subtitle: "Enhanced features & classes",
          buttons: [
            {
              text: "Choose Plan",
              href: "#contact",
            },
          ],
          features: [
            "All Basic Features",
            "Premium Group Classes",
            "One Personal Training Session/Month",
            "Sauna & Steam Access",
          ],
        },
        {
          id: "elite",
          badge: "Ultimate",
          price: "$120/month",
          subtitle: "Ultimate fitness experience",
          buttons: [
            {
              text: "Choose Plan",
              href: "#contact",
            },
          ],
          features: [
            "All Premium Features",
            "Unlimited Personal Training",
            "Nutritional Guidance",
            "Priority Booking for Classes",
          ],
        },
      ]}
      title="Flexible Membership Plans"
      description="Choose the plan that best suits your fitness goals and lifestyle. Enjoy exclusive benefits and unlimited access to our facilities."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          title: "Life-Changing Experience!",
          quote: "Karachi Club GYM transformed my fitness journey. The trainers are exceptional, and the community is incredibly supportive. I've achieved goals I never thought possible!",
          name: "Sarah Khan",
          role: "Dedicated Member",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-lady-pointing-back-with-thumbs-shirt-pants-looking-curious-front-view_176474-43130.jpg",
          imageAlt: "Happy woman smiling in a gym",
        },
        {
          id: "2",
          title: "Best Equipment in the City",
          quote: "I've been to many gyms, but Karachi Club GYM stands out with its top-notch equipment and clean facilities. Every workout is a pleasure here.",
          name: "Ahmed Malik",
          role: "Fitness Enthusiast",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-muscular-sport-person-looking-camera_23-2148162110.jpg",
          imageAlt: "Confident man in a gym workout",
        },
        {
          id: "3",
          title: "Found My Fitness Family",
          quote: "The group classes are amazing! They keep me motivated, and I've made so many great friends. It's more than a gym; it's a second home.",
          name: "Fatima Hassan",
          role: "Group Class Lover",
          imageSrc: "http://img.b2bpic.net/free-photo/group-women-fitness-class-taking-selfies_23-2148387808.jpg",
          imageAlt: "Energetic woman happy in a gym class",
        },
        {
          id: "4",
          title: "Achieved My Strength Goals",
          quote: "Thanks to my personal trainer at Karachi Club GYM, I've seen incredible gains in strength and endurance. Their guidance is invaluable.",
          name: "Ali Raza",
          role: "Strength Trainee",
          imageSrc: "http://img.b2bpic.net/free-photo/brutal-muscular-male-with-crossed-arms-dressed-blue-t-shirt-grey-background_613910-10043.jpg",
          imageAlt: "Focused man training in a gym",
        },
        {
          id: "5",
          title: "A Welcoming Environment",
          quote: "From day one, I felt welcome and supported. The staff is friendly, and there's a positive vibe that makes exercising enjoyable.",
          name: "Hina Iqbal",
          role: "New Member",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-beautiful-woman-doing-sports-morning-park_285396-4310.jpg",
          imageAlt: "Joyful woman after a fitness class",
        },
      ]}
      title="Hear From Our Members"
      description="Our community speaks for itself. Read inspiring stories from members who transformed their lives at Karachi Club GYM."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "What are your operating hours?",
          content: "Karachi Club GYM is open Monday to Friday from 6 AM to 10 PM, and Saturday/Sunday from 8 AM to 8 PM.",
        },
        {
          id: "2",
          title: "Do you offer a trial membership?",
          content: "Yes, we offer a free one-day trial pass for new members. Please contact us to schedule your visit.",
        },
        {
          id: "3",
          title: "Can I bring a guest?",
          content: "Members can bring guests for a daily fee. Some premium memberships include guest passes. Please inquire at the front desk.",
        },
      ]}
      sideTitle="Your Questions, Answered"
      sideDescription="Find quick answers to the most common questions about Karachi Club GYM, our memberships, classes, and facilities."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Ready to Join Us?"
      description="Get in touch with us today to learn more about our memberships, schedule a tour, or ask any questions you may have."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Your Phone (Optional)",
          required: false,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Your message",
        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/doubtful-young-pretty-sporty-girl-wearing-headband-wristbands-talking-phone-keeping-hand-chin-looking-up_141793-117018.jpg"
      imageAlt="Modern gym reception area"
      mediaAnimation="opacity"
      mediaPosition="right"
      buttonText="Send Message"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Karachi Club GYM"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
