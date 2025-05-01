
import { QuizQuestion, QuizResult } from "../types";

// This is a mock dataset since we can't actually upload CSV files in this environment
// In a real implementation, we would parse the CSV file
const mockQuizData: QuizQuestion[] = [
  // Category 1: Disabilities, Challenges, and Assistive Technologies
  {
    id: 1,
    category: "Disabilities, Challenges, and Assistive Technologies",
    question: "Which of the following is a common accessibility challenge for users with cognitive disabilities?",
    options: [
      "Small font sizes on screens",
      "Complex navigation and cluttered interfaces",
      "Audio content without captions",
      "Colors with low contrast"
    ],
    correctAnswer: 1,
    explanation: "Users with cognitive disabilities often struggle with complex navigation and cluttered interfaces. They benefit from clear, simple layouts with consistent navigation patterns and reduced cognitive load.",
    incorrectExplanation: "While small font sizes (option A) can be a challenge for users with visual impairments, audio without captions (option C) affects users who are deaf or hard of hearing, and low contrast colors (option D) impact users with color vision deficiencies or low vision."
  },
  {
    id: 2,
    category: "Disabilities, Challenges, and Assistive Technologies",
    question: "Which assistive technology is primarily used by people who are blind to interact with computers?",
    options: [
      "Screen magnifier",
      "Speech recognition",
      "Screen reader",
      "Alternative keyboard"
    ],
    correctAnswer: 2,
    explanation: "A screen reader is software that reads aloud the content of a screen, including text, buttons, and other interface elements, allowing blind users to navigate and interact with digital content through audio feedback.",
    incorrectExplanation: "Screen magnifiers (option A) are used by people with low vision, not blindness. Speech recognition (option B) helps people with mobility impairments input text. Alternative keyboards (option D) assist people with various physical disabilities."
  },
  {
    id: 3,
    category: "Disabilities, Challenges, and Assistive Technologies",
    question: "What is the main purpose of a refreshable braille display?",
    options: [
      "To convert printed text to audio",
      "To provide tactile output of digital content",
      "To magnify screen content",
      "To convert speech to text"
    ],
    correctAnswer: 1,
    explanation: "A refreshable braille display is a tactile device that converts text from a computer or other digital device into braille characters, allowing users who are blind to read digital content through touch.",
    incorrectExplanation: "Converting text to audio (option A) is the function of a screen reader or text-to-speech software. Magnifying screen content (option C) is done by a screen magnifier. Converting speech to text (option D) is performed by speech recognition software."
  },
  {
    id: 4,
    category: "Disabilities, Challenges, and Assistive Technologies",
    question: "Which of the following conditions would most benefit from captioning on video content?",
    options: [
      "Color blindness",
      "Dyslexia",
      "Deafness or hard of hearing",
      "Motor impairments"
    ],
    correctAnswer: 2,
    explanation: "Captions provide a text alternative to audio content in videos, making them accessible to people who are deaf or hard of hearing by displaying spoken dialogue, sound effects, and other audio information.",
    incorrectExplanation: "Color blindness (option A) relates to visual perception of colors, not audio. While captions may help some users with dyslexia (option B), this is not the primary audience. Motor impairments (option D) affect physical movement, not audio perception."
  },
  {
    id: 5,
    category: "Disabilities, Challenges, and Assistive Technologies",
    question: "Which type of disability is characterized by difficulty in reading due to problems identifying speech sounds and learning how they relate to letters and words?",
    options: [
      "Dyslexia",
      "Dyscalculia",
      "Attention Deficit Hyperactivity Disorder (ADHD)",
      "Autism Spectrum Disorder"
    ],
    correctAnswer: 0,
    explanation: "Dyslexia is a learning disorder characterized by difficulty reading due to problems identifying speech sounds and learning how they relate to letters and words. It affects areas of the brain that process language.",
    incorrectExplanation: "Dyscalculia (option B) specifically affects math abilities. ADHD (option C) involves difficulties with attention, hyperactivity, and impulsivity. Autism Spectrum Disorder (option D) affects social interaction, communication, and behavior."
  },
  {
    id: 6,
    category: "Disabilities, Challenges, and Assistive Technologies",
    question: "What is the primary purpose of switch access technology?",
    options: [
      "To provide alternative text input for blind users",
      "To enable computer control for users with limited mobility",
      "To enhance audio quality for users with hearing impairments",
      "To simplify interfaces for users with cognitive disabilities"
    ],
    correctAnswer: 1,
    explanation: "Switch access technology enables users with limited mobility to control computers and other devices through simple mechanical switches that can be activated with minimal physical movement, such as a slight head movement or breath control.",
    incorrectExplanation: "Alternative text input for blind users (option A) is typically handled by screen readers and braille displays. Audio enhancement (option C) is provided by hearing aids and other audio technologies. Interface simplification (option D) involves design considerations beyond switch technology."
  },
  {
    id: 7,
    category: "Disabilities, Challenges, and Assistive Technologies",
    question: "Which assistive technology would be most useful for someone with severe motor impairments who cannot use a standard keyboard?",
    options: [
      "Screen reader",
      "Eye-tracking device",
      "Closed captions",
      "High contrast screen"
    ],
    correctAnswer: 1,
    explanation: "An eye-tracking device allows users with severe motor impairments to control a computer using only their eye movements, enabling them to move a cursor, select items, type, and navigate without using their hands or voice.",
    incorrectExplanation: "Screen readers (option A) are primarily for users with visual impairments. Closed captions (option C) benefit users with hearing impairments. High contrast screens (option D) help users with vision impairments."
  },
  
  // Category 2: Accessibility and Universal Design
  {
    id: 8,
    category: "Accessibility and Universal Design",
    question: "What is the primary goal of Universal Design?",
    options: [
      "To create specialized solutions for people with disabilities",
      "To meet minimum legal accessibility requirements",
      "To create products and environments usable by all people without adaptation",
      "To provide retrofitted solutions for existing designs"
    ],
    correctAnswer: 2,
    explanation: "Universal Design aims to create products, environments, and systems that are usable by all people, to the greatest extent possible, without the need for adaptation or specialized design. It considers the needs of diverse users from the beginning of the design process.",
    incorrectExplanation: "Creating specialized solutions (option A) contradicts the universality principle. Meeting minimum legal requirements (option B) is compliance, not Universal Design. Retrofitting (option D) addresses accessibility after the fact, not as part of the initial design."
  },
  {
    id: 9,
    category: "Accessibility and Universal Design",
    question: "Which of the following is NOT one of the principles of Universal Design?",
    options: [
      "Equitable Use",
      "Flexibility in Use",
      "Segregated Access",
      "Simple and Intuitive Use"
    ],
    correctAnswer: 2,
    explanation: "Segregated Access is NOT one of the principles of Universal Design. The seven principles are: Equitable Use, Flexibility in Use, Simple and Intuitive Use, Perceptible Information, Tolerance for Error, Low Physical Effort, and Size and Space for Approach and Use.",
    incorrectExplanation: "Equitable Use (option A), Flexibility in Use (option B), and Simple and Intuitive Use (option D) are all legitimate principles of Universal Design. Segregated Access contradicts the core philosophy of Universal Design."
  },
  {
    id: 10,
    category: "Accessibility and Universal Design",
    question: "What is the key difference between accessibility and Universal Design?",
    options: [
      "Accessibility is legally required while Universal Design is optional",
      "Accessibility focuses on people with disabilities while Universal Design considers all users",
      "Accessibility is about digital content while Universal Design applies to physical spaces",
      "Accessibility is inexpensive while Universal Design is costly"
    ],
    correctAnswer: 1,
    explanation: "The key difference is that accessibility specifically focuses on making things usable for people with disabilities, while Universal Design takes a broader approach by creating solutions that work for all people, including those with disabilities, older adults, and people in various situations.",
    incorrectExplanation: "Legal requirements (option A) vary by jurisdiction and aren't the defining difference. Both concepts apply to digital and physical environments (option C). Cost implications (option D) depend on implementation timing and approach, not the concepts themselves."
  },
  {
    id: 11,
    category: "Accessibility and Universal Design",
    question: "Which of the following best describes the concept of 'curb cuts' in the context of Universal Design?",
    options: [
      "A feature designed exclusively for wheelchair users",
      "A feature that benefits multiple groups beyond its original intended users",
      "A temporary accommodation required by accessibility laws",
      "A specialized design that must be requested by users with disabilities"
    ],
    correctAnswer: 1,
    explanation: "Curb cuts exemplify Universal Design because, while originally designed for wheelchair users, they benefit many others including people with strollers, delivery workers with carts, travelers with luggage, cyclists, and more. This demonstrates how accessibility features often have broader benefits.",
    incorrectExplanation: "Although wheelchair users benefit from curb cuts, they weren't designed exclusively for them (option A). Curb cuts are permanent, not temporary accommodations (option C). They are standard features that don't need to be specially requested (option D)."
  },
  {
    id: 12,
    category: "Accessibility and Universal Design",
    question: "In digital design, which technique exemplifies the Universal Design principle of 'Flexibility in Use'?",
    options: [
      "Using a single, fixed font size throughout a website",
      "Allowing users to customize text size, contrast, and layout",
      "Requiring the latest version of a specific browser",
      "Using the most advanced, cutting-edge features"
    ],
    correctAnswer: 1,
    explanation: "Allowing users to customize text size, contrast, and layout exemplifies Flexibility in Use because it accommodates a wide range of individual preferences and abilities, giving users choice in how they interact with content.",
    incorrectExplanation: "A single, fixed font size (option A) lacks flexibility. Requiring specific browsers (option C) or using only cutting-edge features (option D) can exclude users and contradicts the principle of flexibility."
  },
  {
    id: 13,
    category: "Accessibility and Universal Design",
    question: "What is the concept of 'progressive enhancement' in web design?",
    options: [
      "Starting with complex features and simplifying them for older browsers",
      "Building a basic, functional experience first, then enhancing with advanced features",
      "Focusing exclusively on cutting-edge browsers and devices",
      "Requiring users to progressively upgrade their technology to use a website"
    ],
    correctAnswer: 1,
    explanation: "Progressive enhancement involves building a basic, functional experience that works with core web technologies first, then enhancing it with advanced features for browsers and devices that support them. This ensures all users get at least a working experience.",
    incorrectExplanation: "Starting with complex features (option A) is the opposite approach, called graceful degradation. Focusing on cutting-edge technology (option C) or requiring upgrades (option D) excludes users with older technology."
  },
  {
    id: 14,
    category: "Accessibility and Universal Design",
    question: "Which of the following best reflects the Universal Design principle of 'Perceptible Information'?",
    options: [
      "Providing information only in text format to keep designs simple",
      "Using the most aesthetically pleasing presentation regardless of clarity",
      "Presenting information in multiple modes (visual, verbal, tactile) to accommodate different users",
      "Requiring users to adjust their settings to perceive content properly"
    ],
    correctAnswer: 2,
    explanation: "Presenting information in multiple modes (visual, verbal, tactile) exemplifies Perceptible Information because it ensures that essential information is communicated effectively to the user, regardless of ambient conditions or the user's sensory abilities.",
    incorrectExplanation: "Text-only formats (option A) exclude users who need visual or auditory information. Prioritizing aesthetics over clarity (option B) can reduce perceptibility. Requiring users to adjust settings (option D) places the burden on users rather than the design."
  },
  
  // Category 3: Standards, Laws, and Management Strategies
  {
    id: 15,
    category: "Standards, Laws, and Management Strategies",
    question: "Which of the following is the internationally recognized standard for web accessibility?",
    options: [
      "ISO 9001",
      "Section 508",
      "WCAG",
      "ADA"
    ],
    correctAnswer: 2,
    explanation: "The Web Content Accessibility Guidelines (WCAG) are the internationally recognized standards for web accessibility. Developed by the World Wide Web Consortium (W3C), WCAG provides technical specifications for making web content accessible to people with disabilities.",
    incorrectExplanation: "ISO 9001 (option A) is a quality management standard. Section 508 (option B) is a US federal regulation. The ADA (option D) is a US law that broadly covers accessibility but doesn't provide specific technical standards for the web."
  },
  {
    id: 16,
    category: "Standards, Laws, and Management Strategies",
    question: "What are the three levels of conformance in WCAG?",
    options: [
      "Basic, Intermediate, Advanced",
      "Bronze, Silver, Gold",
      "A, AA, AAA",
      "Level 1, Level 2, Level 3"
    ],
    correctAnswer: 2,
    explanation: "WCAG defines three levels of conformance: A (minimum level), AA (addresses the major barriers), and AAA (highest level). Most organizations target AA compliance as it balances accessibility needs with implementation feasibility.",
    incorrectExplanation: "Basic, Intermediate, Advanced (option A), Bronze, Silver, Gold (option B), and Level 1, Level 2, Level 3 (option D) are not the conformance levels used in WCAG."
  },
  {
    id: 17,
    category: "Standards, Laws, and Management Strategies",
    question: "Which legislation requires that US federal government websites be accessible to people with disabilities?",
    options: [
      "Americans with Disabilities Act (ADA)",
      "Section 508 of the Rehabilitation Act",
      "Individuals with Disabilities Education Act (IDEA)",
      "Architectural Barriers Act"
    ],
    correctAnswer: 1,
    explanation: "Section 508 of the Rehabilitation Act specifically requires that electronic and information technology developed, procured, maintained, or used by US federal agencies be accessible to people with disabilities, including federal websites.",
    incorrectExplanation: "The ADA (option A) broadly covers accessibility but doesn't specifically address federal websites. IDEA (option C) focuses on education. The Architectural Barriers Act (option D) addresses physical facilities, not websites."
  },
  {
    id: 18,
    category: "Standards, Laws, and Management Strategies",
    question: "When is the best time to address accessibility in a product development lifecycle?",
    options: [
      "After development is complete but before launch",
      "Only when a complaint is received",
      "From the beginning of the design and planning phase",
      "During the quality assurance testing phase"
    ],
    correctAnswer: 2,
    explanation: "The best practice is to address accessibility from the beginning of the design and planning phase. Integrating accessibility early in the development lifecycle is more cost-effective, efficient, and results in better overall design than retrofitting later.",
    incorrectExplanation: "Addressing accessibility after development (option A) leads to expensive retrofitting. Waiting for complaints (option B) is reactive and risky. QA testing phase (option D) is too late in the process for fundamental accessibility considerations."
  },
  {
    id: 19,
    category: "Standards, Laws, and Management Strategies",
    question: "What is an 'accessibility audit'?",
    options: [
      "A legal certification required for all public websites",
      "A comprehensive evaluation of a product's accessibility against established guidelines",
      "A survey of users with disabilities to gather feedback",
      "A statement published on websites declaring compliance with laws"
    ],
    correctAnswer: 1,
    explanation: "An accessibility audit is a comprehensive evaluation that assesses a product (such as a website) against established accessibility guidelines like WCAG. It identifies barriers for users with disabilities and provides recommendations for remediation.",
    incorrectExplanation: "An accessibility audit is not a legal certification (option A) or simply a user survey (option C), though user testing may complement an audit. It's not merely a compliance statement (option D) but an actual evaluation process."
  },
  {
    id: 20,
    category: "Standards, Laws, and Management Strategies",
    question: "What does the term 'remediation' refer to in accessibility?",
    options: [
      "The process of fixing accessibility issues in an existing product",
      "Financial compensation for users who experience accessibility barriers",
      "Legal exemptions from accessibility requirements",
      "The documentation of accessibility features for users"
    ],
    correctAnswer: 0,
    explanation: "In accessibility, remediation refers to the process of fixing or addressing accessibility issues and barriers in an existing product or service to make it more accessible to people with disabilities.",
    incorrectExplanation: "Remediation is not about financial compensation (option B) or legal exemptions (option C). While documentation (option D) is important, remediation specifically refers to the actual fixing of issues."
  }
];

// Get 20 questions across the categories in a relatively equal distribution (7/7/6)
export const getQuizQuestions = (totalQuestions: number = 20): QuizQuestion[] => {
  const categories = {
    "Disabilities, Challenges, and Assistive Technologies": 7,
    "Accessibility and Universal Design": 7,
    "Standards, Laws, and Management Strategies": 6
  };
  
  let selectedQuestions: QuizQuestion[] = [];
  
  // Filter and select questions for each category
  Object.entries(categories).forEach(([category, count]) => {
    const categoryQuestions = mockQuizData.filter(q => q.category === category);
    
    // Get random questions from this category
    const randomizedCategoryQuestions = [...categoryQuestions]
      .sort(() => Math.random() - 0.5)
      .slice(0, count);
    
    selectedQuestions = [...selectedQuestions, ...randomizedCategoryQuestions];
  });
  
  // Randomize the final set of questions
  return selectedQuestions.sort(() => Math.random() - 0.5);
};

// Calculate quiz results
export const calculateResults = (
  questions: QuizQuestion[], 
  answers: { questionId: number; isCorrect: boolean }[]
): QuizResult => {
  const date = new Date();
  const totalQuestions = questions.length;
  const correctAnswers = answers.filter(a => a.isCorrect).length;
  
  // Group by category
  const categoryResults: QuizResult['categoryResults'] = {};
  
  questions.forEach((question, index) => {
    const category = question.category;
    const isCorrect = answers.find(a => a.questionId === question.id)?.isCorrect || false;
    
    if (!categoryResults[category]) {
      categoryResults[category] = { total: 0, correct: 0, percentage: 0 };
    }
    
    categoryResults[category].total += 1;
    if (isCorrect) {
      categoryResults[category].correct += 1;
    }
  });
  
  // Calculate percentages
  Object.keys(categoryResults).forEach(category => {
    const { total, correct } = categoryResults[category];
    categoryResults[category].percentage = (correct / total) * 100;
  });
  
  return {
    totalQuestions,
    correctAnswers,
    totalTime: 0, // This will be set by the quiz component
    date,
    categoryResults,
    answers: answers.map(a => {
      const question = questions.find(q => q.id === a.questionId);
      return {
        questionId: a.questionId,
        category: question?.category || '',
        isCorrect: a.isCorrect
      };
    })
  };
};

// Generate study recommendations
export const generateRecommendations = (results: QuizResult): string[] => {
  const recommendations: string[] = [];
  
  // Overall performance recommendation
  const overallPercentage = (results.correctAnswers / results.totalQuestions) * 100;
  
  if (overallPercentage < 60) {
    recommendations.push(
      "Focus on building a stronger foundation in all CPACC content areas. Consider reviewing comprehensive study materials before attempting more practice questions."
    );
  } else if (overallPercentage < 80) {
    recommendations.push(
      "You have a good grasp of the material but would benefit from more targeted study in your weaker areas identified below."
    );
  } else {
    recommendations.push(
      "You're performing well overall! Continue practicing to reinforce your knowledge and focus on the few areas where you may still have some gaps."
    );
  }
  
  // Category-specific recommendations
  const weakCategories = Object.entries(results.categoryResults)
    .filter(([_, data]) => data.percentage < 70)
    .sort(([_, dataA], [__, dataB]) => dataA.percentage - dataB.percentage);
  
  if (weakCategories.length > 0) {
    weakCategories.forEach(([category, data]) => {
      recommendations.push(
        `Review the ${category} content area. You answered only ${data.correct} out of ${data.total} questions correctly (${Math.round(data.percentage)}%).`
      );
      
      // Add specific recommendations based on category
      switch (category) {
        case "Disabilities, Challenges, and Assistive Technologies":
          recommendations.push(
            "Focus on understanding different types of disabilities and the specific assistive technologies that address them. Study real-world applications of these technologies."
          );
          break;
        case "Accessibility and Universal Design":
          recommendations.push(
            "Review the principles of Universal Design and how they apply to both digital and physical environments. Pay attention to how these principles benefit all users, not just those with disabilities."
          );
          break;
        case "Standards, Laws, and Management Strategies":
          recommendations.push(
            "Study key accessibility standards like WCAG and important legislation in different regions. Focus on understanding the management strategies for implementing accessibility in organizations."
          );
          break;
      }
    });
  }
  
  // Pattern-based recommendations
  const incorrectAnswers = results.answers.filter(a => !a.isCorrect);
  
  if (incorrectAnswers.length >= 5) {
    recommendations.push(
      "Take time to carefully read each question and consider all options before selecting an answer. Some of your incorrect answers may be due to missing key details in the questions."
    );
  }
  
  return recommendations;
};
