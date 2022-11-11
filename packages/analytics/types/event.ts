export type EventDTO = {
  type: string;
  targetUserId: string;
  targetId: string;
  originUserId: string;
  referrer: string;
  domain: string;
  path: string;
  userAgent: string;
  screenWidth: number;
  onlineTime: number;
}