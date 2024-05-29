/**
* An array of routes accessible without authentication
*
*
*@type {string[]} 
*/

export const publicRoutes =[
    "/"
]

/**
 * api authentication purposes
 * 
 * @type {string} 
 */
export const authRoutes =[
    "/login",
   
]

/**
 * The prefix for API authentication routes
 * 
 * @type {string} 
 */
export const apiAuthPrefix = "/api/auth";

/**
 * default path for users after logging in
 * 
 * @type {string} 
 */
export const DEFAULT_LOGIN_REDIRECT = "/admin"
