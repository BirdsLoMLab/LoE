# LoE Known API Endpoints (Pre-Extraction)

## Discovered via Web Research

### Game API Server
- **Base URL**: `api-wzlr-us.joynetgame.com`
- **Endpoint**: `/sy_api/game_api.php`
- **Parameters**: `action`, `game_uin`, `platform`
- **Known actions**: `login`
- **Known platforms**: `oversea_en_h5`
- **Response**: Returns server connection details (IP, port, server ID, health status) and session token (`t_token`)
- **Source**: Indexed Google result

### H5 Web Client
- **Game URL**: `elementsh5.joynetgame.com`
- **Official site**: `official.joynetgame.com` (Vue CLI template — activity pages)
- **Payment**: `payment.joynetgame.com/@loe`

### Package Info
- **Android package**: `com.zzsjus.google`
- **APK available on**: APKMirror, Uptodown
- **Current version**: 1.0.11

## Potential API Patterns (from LoM crossover)
The same developer (Joy Nice Games / JUXIN NETWORK LIMITED) makes Legend of Mushroom.
API infrastructure may share patterns — look for:
- Similar `sy_api/game_api.php` pattern
- Same auth flow with `game_uin` + `t_token`
- `wzlr` in subdomain may be game-specific code

## To Be Populated
After HAR capture analysis, this file will be updated with:
- All discovered API endpoints
- Request/response schemas
- WebSocket connection details
- Authentication flow documentation
