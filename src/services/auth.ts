import request from "@/utils/request";

// ======================= 邮箱验证码 =======================

/**
 * 发送邮箱验证码的参数类型
 */
type SendEmailParams = {
  email: string;
  password?: string;
  password_confirm?: string;
};

/**
 * 发送邮箱验证码的响应类型
 */
type SendEmailResponse = {
  code: number;
  message: string;
  data: {};
};

/**
 * 发送邮箱验证码
 * @param params 请求参数，包含邮箱、密码和确认密码
 * @returns Promise<SendEmailResponse>
 */
export const sendEmail = (params: SendEmailParams) => {
  return request.post<SendEmailResponse>('/auth/send-verify-code', params);
};

// ======================= 用户注册 =======================

/**
 * 用户注册的参数类型
 */
type RegisterParams = {
  email: string;
  password: string;
  password_confirm: string;
  auth_code: string;
};

/**
 * 用户注册的响应类型
 */
type RegisterResponse = { 
  code: number;
  message: string;
  data: {};
};

/**
 * 用户注册
 * @param params 请求参数，包含邮箱、密码、确认密码和验证码
 * @returns Promise<RegisterResponse>
 */
export const register = (params: RegisterParams) => {
  return request.post<RegisterResponse>('/auth/register', params);
};

