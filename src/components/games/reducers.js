/*eslint-disable-next-line*/
export function games(state = [], { type, payload }) {
    switch (type) {
        case GAMES_LOAD:
            return payload;
    }
}