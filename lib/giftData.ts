// ============================================================
// 🎁 GIFT DATA — EDIT HERE to add or change customer content
// ============================================================
// Each key is the URL slug: /gift/aya → id = "aya"
// ============================================================

export interface GiftData {
  name: string;           // Shown in the intro "Make a wish, [name]!"
  senderName?: string;    // Signature at the bottom of the letter (e.g., "Aya ✨")
  envelopeImage: string;  // Path inside /public — the envelope image
  birthdayImage: string;  // Path inside /public — the main birthday card image
  message: string;        // The birthday message (supports \n for line breaks)
  musicUrl?: string;      // Optional: URL to a background music mp3
  accentColor?: string;   // Optional: custom accent color (default: #38bdf8)
}

// ============================================================
// CUSTOMER DATA
// ============================================================
const defaultGift: GiftData = {
  name: "Habiby",                                     // اسم مستلم الهدية
  senderName: "your love",                            // التوقيع في آخر الرسالة (اختياري)
  envelopeImage: "/images/envelope-aya.png",          // صورة الظرف
  birthdayImage: "/images/birthday-aya.png",          // صورة الهدية النهائية
  accentColor: "#38bdf8",                             // اللون الأزرق الفاتح المتوافق مع التصميم الجديد
  musicUrl: "",                                       // رابط الموسيقى هنا
  message: `Happy birthday, my love, my favorite person, and my future husband. ❤️🥹🎂

I honestly don’t think words will ever be enough to explain how much you mean to me. You came into my life and became so much more than just the person I love. You became my comfort, my happiness, my safe place, and the person my heart chooses over and over again. You’re the one I want to share every little detail of my day with, the one I want beside me when life gets hard, and the one I want to celebrate every beautiful moment with.

On your birthday, I wish I could give you the world, because that’s what you deserve and so much more. I wish you could see yourself through my eyes just for a moment, so you could understand how special you are to me, how much I admire you, and how lucky I feel to have you in my life. I pray that this new year of your life brings you peace, happiness, success, and every beautiful thing your heart has ever wished for. And whenever life feels heavy, I hope you always remember that you have someone who loves you deeply, believes in you endlessly, and will always be cheering for you.

You’re not just the man I love today; you’re the man I dream of spending all my tomorrows with. I dream of the little life we’ll build together, the home we’ll share, the late-night conversations, the silly arguments we’ll laugh about later, the hugs after long days, and all the birthdays we’ll celebrate side by side. I want to be there for every version of you, through every season of life, loving you when everything is beautiful and holding your hand when things aren’t so easy.

If there’s one thing I want you to know today, it’s that my love for you goes beyond the beautiful moments. I choose you in the ordinary days, in the difficult moments, in the uncertainty, and in every chapter we haven’t lived yet. You have a place in my heart that no one else could ever fill, and no matter how many birthdays come and go, I hope I’ll always be the person standing beside you, reminding you how loved you are.

Happy birthday, my future husband. ❤️ May God protect your heart, bless your steps, grant you everything you pray for, and keep you safe for me. I pray that one day, when we look back on this birthday, we’ll be sitting together in our own home, smiling at how far we’ve come and feeling grateful that we found each other.

I love you more than these words could ever explain, more than you probably realize, and in ways I’m still discovering every day. You are one of the most beautiful things that has ever happened to me, and if I could choose all over again, in every lifetime and every version of this world, I would still choose you. Every single time. 🥹❤️

Happy birthday, habibi. My today, my tomorrow, and my forever. 💍❤️`,
};

const giftData: Record<string, GiftData> = {
  ahmed: defaultGift,
  aya: defaultGift,
};

export default giftData;