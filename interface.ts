interface User {
  readonly dbId: number;
  name: string;
  email: string;
  googleId?: string;
  //   startTrial: () => string; // or
  startTrial(): string;
  getCoupon(couponName: string, value: number): number;
}

interface User {
  githubToken: string;
}
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const laksh: User = {
  dbId: 1,
  name: "Lakshman",
  email: "laksh@google.com",
  githubToken: "laksh123",
  startTrial: () => "trial started",
  getCoupon: (name: "laksh10", off: 10) => {
    return 10;
  },
};

const lakshman: Admin = {
  dbId: 1,
  name: "Lakshman",
  email: "laksh@google.com",
  role: "admin",
  githubToken: "laksh123",
  startTrial: () => "trial started",
  getCoupon: (name: "laksh10", off: 10) => {
    return 10;
  },
};
