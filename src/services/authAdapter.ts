import type { AuthenticationService } from "../application/ports";
import { fakeApi } from "./api";
import type {UserName} from '../domain/user';

export function useAuth() : AuthenticationService {
    return {
        auth(name : UserName, email: Email) {
            return fakeApi({
                    name,
                    email,
                    id: "sample-user-id",
                    allergies: ["cocoa", "cherry"],
                    preferences: ["marshmallow", "peanuts"],
            })
        }
    }
}