
# Soulscan: Simplifying Mental Health Care  

In today’s fast-paced world, the rise of social media and demanding lifestyles has led to a noticeable increase in mental health issues. Despite this, many individuals avoid seeking professional help due to stigma or a lack of resources. **Soulscan** is designed to bridge this gap, offering a simple and beginner-friendly mental health application that empowers users with tools, insights, and resources to support their emotional well-being.  

## Key Features  

### 1. **Mental Health Assessments**  
Soulscan integrates two globally recognized tools to assess mental health:  
- **PHQ-9 (Patient Health Questionnaire)**: Consists of 9 questions with a maximum score of 27.  
- **GAD-7 (Generalized Anxiety Disorder)**: Includes 7 questions with a maximum score of 21.  

Each question is scored on a scale from 0 to 3:  
- 0: Not at all  
- 1: Several days  
- 2: More than half the days  
- 3: Almost every day  

#### Score-Based Classifications:  
- **Minimal Severity**: Scores < 5  
- **Mild**: Scores 5–9  
- **Moderate**: Scores 10–14  
- **Severe**: Scores ≥ 15  

Based on these scores, Soulscan provides tailored recommendations such as:  
- Guided meditation videos.  
- Breathing techniques.  
- Contact information for nearby mental health professionals.  

---

### 2. **Journal Entry with Sentiment Analysis**  
Users can log their thoughts and emotions in the journal feature. Entries are processed using Python’s **Pandas** library, and sentiment analysis is conducted via the **Cohere API** and **TextBlob** to determine emotional trends. This feature allows users to reflect on their mental health over time and receive feedback.  

---

### 3. **Personalized Recommendations**  
Soulscan suggests curated resources based on users’ questionnaire scores and journal sentiment. These include:  
- YouTube videos for mindfulness and relaxation.  
- Breathing and stress-relief exercises.  
- Professional mental health services based on location.  

---

## Technical Stack  

- **Front-End**: React Native ensures a responsive, cross-platform user interface.  
- **Back-End**: Flask handles server-side logic and data processing.  
- **Prediction Model**: Linear regression is employed for simplicity and efficiency in score analysis.  
- **Sentiment Analysis**: TextBlob and Cohere API analyze journal entries to extract emotional context.  
- **Containerization**: Docker ensures seamless deployment and reduces dependency-related issues.  

---

## Why Soulscan?  
1. **Beginner-Friendly**: Designed for simplicity, Soulscan is accessible to users with no technical expertise.  
2. **Practical Insights**: Combines assessments, journaling, and recommendations to create a holistic mental health tool.  
3. **Stigma-Free**: Encourages self-reflection and provides resources without requiring direct interaction with a professional.  

---

## Future Enhancements  
- **Advanced Recommendation Engine**: Integrating AI/ML to refine resource suggestions.  
- **Chatbot Support**: A mental health chatbot for real-time assistance.  
- **Gamified Tracking**: Reward systems for consistent journaling and self-care.  

**Soulscan** aims to make mental health care accessible, stigma-free, and easy to integrate into everyday life.  

