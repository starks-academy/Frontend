import { request } from "@/lib/api/client";

export interface Certificate {
  id: string;
  userId: string;
  moduleId: number;
  score: number;
  txId?: string;
  mintedAt?: string;
  createdAt: string;
}

export interface MintCertificateDto {
  moduleId: number; // 1–6 (course module)
  score: number;    // 0–100 (final assessment score)
}

export const certificatesApi = {
  /** Get the authenticated user's certificates */
  getMyCerts: () => request<Certificate[]>("/certificates/me"),

  /** Get any user's public certificates */
  getUserCerts: (userId: string) =>
    request<Certificate[]>(`/certificates/user/${userId}`),

  /** Get a single certificate by ID */
  getCert: (id: string) => request<Certificate>(`/certificates/${id}`),

  /**
   * Mint a SIP-009 NFT certificate for a completed module.
   * Call this after a user passes the final assessment.
   */
  mint: (dto: MintCertificateDto) =>
    request<Certificate>("/certificates/mint", {
      method: "POST",
      body: JSON.stringify(dto),
    }),
};
