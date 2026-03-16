export { authApi } from "./auth";
export { usersApi } from "./users";
export { gamificationApi } from "./gamification";
export { galleryApi } from "./gallery";
export { coursesApi } from "./courses";

export type {
  AuthResponse,
  ChallengeResponse,
  LeaderboardEntry,
  StreakInfo,
  UpdateProfileDto,
  UserProfile,
  UserStats,
  XpInfo,
} from "./types";

export type { GalleryProject, CreateProjectDto } from "./gallery";
export type {
  Course,
  CourseLesson,
  CourseStep,
  CourseProgress,
} from "./courses";
