mod utils;

use gstd::ActorId;
use gtest::{Program, System};
use utils::VaraMan;
use vara_man_io::{Player, Status};

#[test]
fn success() {
    let system = System::new();
    system.init_logger();

    let vara_man = Program::vara_man(&system);
    vara_man.change_status(Status::Started);

    let state = vara_man.get_state();
    assert!(state.players.is_empty());

    let player_0_id: ActorId = utils::PLAYERS[0].into();
    let player_2_id: ActorId = utils::PLAYERS[2].into();

    vara_man.register_player(utils::PLAYERS[0], "John", utils::PLAYERS[0].into(), false);
    vara_man.register_player(utils::PLAYERS[1], "Jack", utils::PLAYERS[2].into(), false);

    let state = vara_man.get_state();

    assert_eq!(state.players.len(), 2);
    assert!(state.players.contains(&(
        player_0_id,
        Player {
            name: "John".to_owned(),
            retries: 0,
            claimed_gold_coins: 0,
            claimed_silver_coins: 0,
        }
    )));
    assert!(state.players.contains(&(
        player_2_id,
        Player {
            name: "Jack".to_owned(),
            retries: 0,
            claimed_gold_coins: 0,
            claimed_silver_coins: 0,
        }
    )));
}

#[test]
fn fail_player_already_registered() {
    let system = System::new();
    system.init_logger();

    let vara_man = Program::vara_man(&system);
    vara_man.change_status(Status::Started);

    let state = vara_man.get_state();
    assert!(state.players.is_empty());

    vara_man.register_player(utils::PLAYERS[0], "John", utils::PLAYERS[0].into(), false);
    vara_man.register_player(utils::PLAYERS[0], "John", utils::PLAYERS[0].into(), true);

    let state = vara_man.get_state();
    assert_eq!(state.players.len(), 1);
}
