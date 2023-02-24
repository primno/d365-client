import { NtlmCredentials } from "axios-ntlm";
import { ConnectionStringProcessor } from "../../connection-string";

export function convertToNetworkCredential(connectionString: ConnectionStringProcessor): NtlmCredentials {
    if (connectionString.userName == null || connectionString.password == null || connectionString.domain == null) {
        throw new Error("Connection string is missing username, password or domain");
    }

    return { 
        password: connectionString.password!,
        username: connectionString.userName!,
        domain: connectionString.domain!
    };
}

export { NtlmAuth } from "./ntlm-auth";