# Triggers

> Learn how to use triggers to customize your chatbot's behavior.

## Quick Start

Triggers let your chatbot take actions automatically based on visitor behavior—like opening the widget, sending a message, or showing contextual “Ask AI” questions on specific pages.

## Set up Triggers

<Steps>
  <Step>
    In your YourGPT dashboard, go to **Widget**.
    ![Open Widget settings](/assets/chatbot/triggers-2/image-1.png)
  </Step>
  <Step>
    In widget settings, scroll to **Triggers** and open it.
    ![Open Triggers section](/assets/chatbot/triggers-2/image-2.png)
  </Step>
  <Step>
    You’ll land on the **Triggers** page. From here, you can configure **Event Triggers** and **Ask AI Triggers**.
    ![Triggers page](/assets/chatbot/triggers-2/image-3.png)
  </Step>
</Steps>

## Event Triggers

Event Triggers run actions when a visitor event happens (for example, visiting a page, clicking an element, or leaving a page).

![Event Triggers](/assets/chatbot/triggers-2/image-16.png)

### 1) Create a new trigger
<Steps>
  <Step>
    Go to **Event Triggers** and click **Add Trigger**.
    ![Add Event Trigger](/assets/chatbot/triggers-2/image-4.png)
  </Step>
  <Step>
    Give your trigger a name.
    ![Name your Trigger](/assets/chatbot/triggers-2/image-15.png)
  </Step>
  <Step>
    Choose an **Event** for when the trigger should run:
    - **Visit on website**
    - **Click Element**
    - **Leave website**
    ![Choose Event](/assets/chatbot/triggers-2/image-11.png)
  </Step>
  <Step>
    Set **Conditions** to control *where* and *when* it should fire:
    - **Page URLs** (optional)
    - **First visit** toggle
    - **Time spent** (seconds)
    - **Scrolled** (%)
    - **Device Type** (All / Mobile / Desktop)
    - **Day Conditions** (days of week)
    ![Conditions](/assets/chatbot/triggers-2/image-12.png)
  </Step>
  <Step>
    Configure **Actions**:
    - **Send a message** (add one or more messages, optionally add buttons)
    - **Open chatbot**
    - **Enable Gamification** (see [Gamification](/chatbot/chatbot-widget/gamification))
    ![Actions](/assets/chatbot/triggers-2/image-13.png)
  </Step>
  <Step>
    When you’re done, click **Create Trigger** to save.
    ![Create Trigger](/assets/chatbot/triggers-2/image-14.png)
  </Step>
</Steps>

## Ask AI Triggers

Ask AI Triggers show contextual AI questions based on your page content and visitor behavior. You configure them per page path and then add elements (text or DOM selectors) that should trigger a question.

<div className='relative aspect-video'>
<iframe src="https://www.youtube.com/embed/v1rINPATX18"
  title="Ask AI Trigger is Live! A New Way to Engage Visitors" 
  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"    referrerpolicy="strict-origin-when-cross-origin"
  allowFullScreen
  className="absolute inset-0 w-full h-full rounded-lg"
  />
</div>

### 1) Create a page rule

<Steps>
  <Step>
    Go to **Ask AI Triggers** and click **Create trigger**.
    ![Create Ask AI Trigger](/assets/chatbot/triggers-2/image-6.png)
  </Step>
  <Step>
    In **Add Page**:
    - Choose **Home Page** or **Specific Page**
    - Enter the **Page path** (example: `/pricing`)
    - Select a **Match Type**:
      - **Contains path**: matches any URL containing this path
      - **Exact path**: matches only this specific URL
    Then click **Create Page**.
    ![Add Page modal](/assets/chatbot/triggers-2/image-7.png)
  </Step>
  <Step>
    After adding pages, you can **search**, **edit**, or **delete** page rules from the list.
    ![Ask AI Triggers page list](/assets/chatbot/triggers-2/image-8.png)
  </Step>
</Steps>

### 2) Add elements and questions

<Steps>
  <Step>
    Open a page rule and click **Add Element**.
    ![Add Element button](/assets/chatbot/triggers-2/image-9.png)
  </Step>
  <Step>
    In **Add Element**:
    - Choose **Text Match** or **Element Match**
    - Enter the text/selector to match on the page
    - Add the **Question** you want to ask when this content is matched
    - Optionally enable **Filters**
    Then click **Add Element**.
    ![Add Element modal](/assets/chatbot/triggers-2/image-10.png)
  </Step>
</Steps>