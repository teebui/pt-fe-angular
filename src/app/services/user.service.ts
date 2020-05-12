import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Env } from '@environments/dev'
import { User } from '@app/models/User'

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${Env.apiUrl}/users`)
    }
}