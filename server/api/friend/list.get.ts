import { IsNull } from "typeorm"
import { AppDataSource } from "~~/server/db/data-source"
import { Friend } from "~~/server/db/entities/Friend"

export default defineEventHandler(async (event) => {
    const { user } = await getUserSession(event)
    const friendRepo = AppDataSource.getRepository(Friend)

    return await friendRepo.find({
        select: {
            friendId: true,
            playerId: true,
            createdAt:true
        },
        where: {
            user: {
                discordId: (user as any).id
            },
            deletedAt: IsNull()
        }
    })
})