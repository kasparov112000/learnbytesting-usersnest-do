import { Controller, Get } from "@nestjs/common";
import { HealthCheck, HealthCheckService, HttpHealthIndicator  } from "@nestjs/terminus"; // MongooseHealthIndicator
import { Public } from "src/auth/public.decorator";

@Controller('healthcheck')
export class HealthCheckController {
    constructor(
        private healthCheckService: HealthCheckService,
        private http: HttpHealthIndicator
        // private db: MongooseHealthIndicator,
    ){}


    @Get()
    @HealthCheck()
    @Public()
    checkHealth() {
        return this.healthCheckService.check([
            // () => this.http.pingCheck('Basic Check', 'http://localhost:3022'),
            () => this.http.pingCheck('google', 'https://google.com')
        ]);
    }
}